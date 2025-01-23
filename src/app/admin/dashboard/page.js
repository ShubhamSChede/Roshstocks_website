'use client';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Josefin_Sans } from "next/font/google";

const josfin = Josefin_Sans({
  subsets: ['latin'],
  weight: '400',
});

function Dashboard() {
  const router = useRouter();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/admin/login');
    },
  });

  const fileInputRef = useRef(null);
  // Initialize all form state with empty strings or appropriate default values
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [tags, setTags] = useState('');
  const [type, setType] = useState('photo');
  const [uploadType, setUploadType] = useState('file');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Handle YouTube video ID extraction
  const getYoutubeVideoId = (url) => {
    try {
      const urlObj = new URL(url);
      if (urlObj.hostname === 'youtu.be') {
        return urlObj.pathname.slice(1);
      }
      if (urlObj.hostname === 'www.youtube.com' || urlObj.hostname === 'youtube.com') {
        const searchParams = new URLSearchParams(urlObj.search);
        return searchParams.get('v');
      }
    } catch (error) {
      return null;
    }
    return null;
  };

  const validateYoutubeUrl = (url) => {
    const videoId = getYoutubeVideoId(url);
    if (!videoId) {
      throw new Error('Invalid YouTube URL. Please enter a valid YouTube video URL.');
    }
    return videoId;
  };

  const resetForm = () => {
    setTitle('');
    setFile(null);
    setYoutubeUrl('');
    setTags('');
    setType('photo');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccessMessage('');

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('tags', tags);
      formData.append('uploadType', uploadType);

      if (uploadType === 'file') {
        if (!file) {
          throw new Error('Please select a file');
        }
        formData.append('file', file);
        formData.append('type', type);
      } else {
        const videoId = validateYoutubeUrl(youtubeUrl);
        formData.append('youtubeUrl', youtubeUrl);
        formData.append('youtubeVideoId', videoId);
        formData.append('type', 'video');
      }

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to upload invite');
      }

      setSuccessMessage('Invite uploaded successfully!');
      resetForm();
    } catch (err) {
      setError(err.message || 'Error uploading invite');
    } finally {
      setLoading(false);
    }
  };

  if (status === 'loading') {
    return (
      <main className={josfin.className}>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          Loading...
        </div>
      </main>
    );
  }

  return (
    <main className={josfin.className}>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">Upload New Invite</h1>
              <button
                onClick={() => router.push('/')}
                className="text-gray-600 hover:text-gray-900"
              >
                Back to Home
              </button>
            </div>
            
            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
                {error}
              </div>
            )}
            
            {successMessage && (
              <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
                {successMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setUploadType('file')}
                  className={`px-4 py-2 rounded-md ${
                    uploadType === 'file'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  Upload File
                </button>
                <button
                  type="button"
                  onClick={() => setUploadType('youtube')}
                  className={`px-4 py-2 rounded-md ${
                    uploadType === 'youtube'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  YouTube Link
                </button>
              </div>

              {uploadType === 'file' ? (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    File
                  </label>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                    className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
                    accept="image/*,video/*"
                    required
                  />
                </div>
              ) : (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    YouTube URL
                  </label>
                  <input
                    type="url"
                    value={youtubeUrl || ''} // Ensure value is never undefined
                    onChange={(e) => setYoutubeUrl(e.target.value)}
                    className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
                    placeholder="https://www.youtube.com/watch?v=..."
                    required
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tags (comma-separated)
                </label>
                <input
                  type="text"
                  value={tags || ''} // Ensure value is never undefined
                  onChange={(e) => setTags(e.target.value)}
                  className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
                  placeholder="wedding invite, Hindu invite, save the date"
                  required
                />
              </div>

              {uploadType === 'file' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Type
                  </label>
                  <select
                    value={type || 'photo'} // Ensure value is never undefined
                    onChange={(e) => setType(e.target.value)}
                    className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="photo">Photo</option>
                    <option value="video">Video</option>
                  </select>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white 
                  ${loading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'}
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
              >
                {loading ? 'Uploading...' : 'Upload Invite'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;