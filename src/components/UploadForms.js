'use client';
import { useState, useRef } from 'react';

const UploadForm = ({ onSuccess, onError }) => {
  const fileInputRef = useRef(null);
  const [title, setTitle] = useState('');
  const [files, setFiles] = useState([]);
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [tags, setTags] = useState('');
  const [type, setType] = useState('photo');
  const [uploadType, setUploadType] = useState('file');
  const [loading, setLoading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);

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
    setFiles([]);
    setSelectedFiles([]);
    setYoutubeUrl('');
    setTags('');
    setType('photo');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
    setSelectedFiles(selectedFiles.map(file => ({
      name: file.name,
      size: (file.size / 1024 / 1024).toFixed(2) + ' MB'
    })));
  };

  const removeFile = (index) => {
    setFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
    setSelectedFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('tags', tags);
      formData.append('uploadType', uploadType);

      if (uploadType === 'file') {
        if (files.length === 0) {
          throw new Error('Please select at least one file');
        }
        
        files.forEach((file, index) => {
          formData.append('file', file);
          const fileType = file.type.startsWith('video/') ? 'video' : 'photo';
          formData.append('type', fileType);
          formData.append('order', index + 1);
        });
      } else {
        const videoId = validateYoutubeUrl(youtubeUrl);
        formData.append('youtubeVideoId', videoId);
        formData.append('type', 'video');
        formData.append('order', 1);
      }

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to upload invite');
      }

      onSuccess('Invite uploaded successfully!');
      resetForm();
    } catch (err) {
      onError(err.message || 'Error uploading invite');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Form fields remain the same as in your original code */}
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
          Upload Files
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
            Files
          </label>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
            accept="image/*,video/*"
            multiple
            required
          />
          
          {selectedFiles.length > 0 && (
            <div className="mt-4 space-y-2">
              <p className="text-sm font-medium text-gray-700">Selected Files:</p>
              {selectedFiles.map((file, index) => (
                <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                  <span className="text-sm">
                    {file.name} ({file.size})
                  </span>
                  <button
                    type="button"
                    onClick={() => removeFile(index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            YouTube URL
          </label>
          <input
            type="url"
            value={youtubeUrl}
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
          value={tags}
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
            value={type}
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
  );
};

export default UploadForm;