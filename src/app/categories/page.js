'use client';
import { useState, useEffect } from 'react';
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Josefin_Sans } from "next/font/google";
import { LoadingProvider } from "../../components/PageLoader";
import ImageSlider from '../../components/ImageSlider';

const josfin = Josefin_Sans({
  subsets: ['latin'],
  weight: '400',
});

export default function Categories() {
  const [invites, setInvites] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchInvites();
  }, []);

  const fetchInvites = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch('/api/invites');
      if (!res.ok) {
        throw new Error('Failed to fetch invites');
      }
      const data = await res.json();
      setInvites(data);
      
      // Extract all unique tags
      const tags = new Set(data.flatMap(invite => invite.tags));
      setAllTags([...tags]);
    } catch (error) {
      console.error('Error fetching invites:', error);
      setError('Failed to load invites. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const toggleTag = (tag) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const filteredInvites = invites.filter(invite =>
    selectedTags.length === 0 ||
    invite.tags.some(tag => selectedTags.includes(tag))
  );

  return (
    <LoadingProvider>
      <main className={josfin.className}>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          
          <div className="max-w-7xl mx-auto p-4 pt-20 pb-20">
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Categories</h2>
              {loading ? (
                <div className="text-center py-8">Loading...</div>
              ) : error ? (
                <div className="text-center py-8 text-red-500">{error}</div>
              ) : (
                <>
                  <div className="flex flex-wrap gap-2">
                    {allTags.map(tag => (
                      <button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`px-4 py-2 rounded-full ${
                          selectedTags.includes(tag)
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-200 text-gray-700'
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {filteredInvites.length === 0 ? (
                      <div className="col-span-full text-center py-8 text-gray-500">
                        No invites found.
                      </div>
                    ) : (
                      filteredInvites.map(invite => (
                        <div key={invite._id} className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                          {invite.media?.length > 0 ? (
                            <ImageSlider media={invite.media} />
                          ) : invite.type === 'photo' ? (
                            <div className="relative w-full pb-[177.78%]">
                              <img
                                src={invite.imageUrl}
                                alt={invite.title}
                                className="absolute top-0 left-0 w-full h-full object-cover"
                              />
                            </div>
                          ) : invite.isYoutubeVideo ? (
                            <div className="relative w-full pb-[177.78%]">
                              <iframe
                                src={invite.imageUrl}
                                title={invite.title}
                                className="absolute top-0 left-0 w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              />
                            </div>
                          ) : (
                            <div className="relative w-full pb-[177.78%]">
                              <video
                                src={invite.imageUrl}
                                controls
                                className="absolute top-0 left-0 w-full h-full object-cover"
                              />
                            </div>
                          )}
                          <div className="p-4">
                            <h3 className="font-bold mb-2">{invite.title}</h3>
                            <div className="flex flex-wrap gap-2">
                              {invite.tags.map(tag => (
                                <span
                                  key={tag}
                                  className="px-2 py-1 bg-gray-100 rounded-full text-sm"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </>
              )}
            </div>
          </div>

          <Footer />
        </div>
      </main>
    </LoadingProvider>
  );
}