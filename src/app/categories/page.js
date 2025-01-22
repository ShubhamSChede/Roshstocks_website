'use client';
import { useState, useEffect } from 'react';
import { Import } from "lucide-react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Josefin_Sans } from "next/font/google";
import { LoadingProvider } from "../../components/PageLoader";

const josfin = Josefin_Sans({
  subsets: ['latin'],
  weight: '400',
});

export default function Categories() {
  const [invites, setInvites] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [allTags, setAllTags] = useState([]);

  useEffect(() => {
    fetchInvites();
  }, []);

  const fetchInvites = async () => {
    try {
      const res = await fetch('/api/invites');
      const data = await res.json();
      setInvites(data);
      
      // Extract all unique tags
      const tags = new Set(data.flatMap(invite => invite.tags));
      setAllTags([...tags]);
    } catch (error) {
      console.error('Error fetching invites:', error);
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
          
          {/* Categories Content */}
          <div className="max-w-7xl mx-auto p-4 pt-20 pb-20"> {/* Added padding for navbar and footer */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Categories</h2>
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredInvites.map(invite => (
                <div key={invite._id} className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                  {invite.type === 'photo' ? (
                    <img
                      src={invite.imageUrl}
                      alt={invite.title}
                      className="w-full h-64 object-cover"
                    />
                  ) : (
                    <video
                      src={invite.imageUrl}
                      controls
                      className="w-full h-64 object-cover"
                    />
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
              ))}
            </div>
          </div>

          <Footer />
        </div>
      </main>
    </LoadingProvider>
  );
}