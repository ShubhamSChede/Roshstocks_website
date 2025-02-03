'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Josefin_Sans } from "next/font/google";
import UploadForm from './UploadForms';
import ManageInvites from './ManageInvites';
import ReviewsSection from './ReviewSection';

const josfin = Josefin_Sans({
  subsets: ['latin'],
  weight: '400',
});

function DashboardClient() {
  const router = useRouter();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/admin/login');
    },
  });

  const [activeTab, setActiveTab] = useState('upload');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleError = (message) => {
    setError(message);
    setTimeout(() => setError(''), 3000);
  };

  const handleSuccess = (message) => {
    setSuccessMessage(message);
    setTimeout(() => setSuccessMessage(''), 3000);
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
        <div className="max-w-6xl mx-auto">
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>
              <button
                onClick={() => router.push('/')}
                className="text-gray-600 hover:text-gray-900"
              >
                Back to Home
              </button>
            </div>

            {/* Tab Navigation */}
            <div className="flex space-x-4 mb-6 border-b">
              <button
                onClick={() => setActiveTab('upload')}
                className={`py-2 px-4 ${
                  activeTab === 'upload'
                    ? 'border-b-2 border-blue-500 text-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Upload New Invite
              </button>
              <button
                onClick={() => setActiveTab('manage')}
                className={`py-2 px-4 ${
                  activeTab === 'manage'
                    ? 'border-b-2 border-blue-500 text-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Manage Invites
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`py-2 px-4 ${
                  activeTab === 'reviews'
                    ? 'border-b-2 border-blue-500 text-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Manage Reviews
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

            {/* Content Sections */}
            {activeTab === 'upload' && (
              <UploadForm 
                onSuccess={handleSuccess}
                onError={handleError}
              />
            )}

            {activeTab === 'manage' && (
              <ManageInvites
                onSuccess={handleSuccess}
                onError={handleError}
              />
            )}

            {activeTab === 'reviews' && (
              <ReviewsSection
                onSuccess={handleSuccess}
                onError={handleError}
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default DashboardClient;