'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Josefin_Sans } from "next/font/google";
import { LoadingProvider } from "../../components/PageLoader";
import ImageSlider from '../../components/ImageSlider';
import { Filter, X } from 'lucide-react';

const josfin = Josefin_Sans({
  subsets: ['latin'],
  weight: '400',
});

// Define media type options
const MEDIA_TYPES = {
  PHOTO: 'photo',
  VIDEO: 'video',
  MULTIPLE: 'multiple',
};

export default function Categories() {
  const [invites, setInvites] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedMediaTypes, setSelectedMediaTypes] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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
      
      // Extract all unique tags and sort them alphabetically
      const tags = new Set(data.flatMap(invite => invite.tags));
      setAllTags([...tags].sort());
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

  const toggleMediaType = (type) => {
    setSelectedMediaTypes(prev =>
      prev.includes(type)
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const clearFilters = () => {
    setSelectedTags([]);
    setSelectedMediaTypes([]);
  };

  const getMediaType = (invite) => {
    if (invite.media?.length > 1) return MEDIA_TYPES.MULTIPLE;
    if (invite.type === 'photo') return MEDIA_TYPES.PHOTO;
    return MEDIA_TYPES.VIDEO;
  };

  const filteredInvites = invites.filter(invite => {
    const matchesTags = selectedTags.length === 0 || 
      invite.tags.some(tag => selectedTags.includes(tag));
    
    const mediaType = getMediaType(invite);
    const matchesMediaType = selectedMediaTypes.length === 0 || 
      selectedMediaTypes.includes(mediaType);

    return matchesTags && matchesMediaType;
  });

  const renderMedia = (invite) => {
    if (invite.media?.length > 0) {
      return <ImageSlider media={invite.media} />;
    }

    const wrapperClass = "relative w-full aspect-[4/5] md:aspect-[9/16] overflow-hidden";
    
    if (invite.type === 'photo') {
      return (
        <div className={wrapperClass}>
          <Image
            src={invite.imageUrl}
            alt={invite.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority={false}
            quality={75}
          />
        </div>
      );
    }

    if (invite.isYoutubeVideo) {
      return (
        <div className={wrapperClass}>
          <iframe
            src={invite.imageUrl}
            title={invite.title}
            className="absolute top-0 left-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      );
    }

    return (
      <div className={wrapperClass}>
        <video
          src={invite.imageUrl}
          controls
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
    );
  };

  const FilterPanel = () => (
    <div className="bg-white p-4 rounded-lg shadow-lg mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Filters</h3>
        {(selectedTags.length > 0 || selectedMediaTypes.length > 0) && (
          <button
            onClick={clearFilters}
            className="text-sm text-blue-500 hover:text-blue-700 flex items-center gap-1"
          >
            <X className="w-4 h-4" />
            Clear all
          </button>
        )}
      </div>

      {/* Media Type Filters */}
      <div className="mb-6">
        <h4 className="text-sm font-medium mb-2">Media Type</h4>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => toggleMediaType(MEDIA_TYPES.PHOTO)}
            className={`px-3 py-1.5 rounded-full text-sm ${
              selectedMediaTypes.includes(MEDIA_TYPES.PHOTO)
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Photos
          </button>
          <button
            onClick={() => toggleMediaType(MEDIA_TYPES.VIDEO)}
            className={`px-3 py-1.5 rounded-full text-sm ${
              selectedMediaTypes.includes(MEDIA_TYPES.VIDEO)
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Videos
          </button>
          <button
            onClick={() => toggleMediaType(MEDIA_TYPES.MULTIPLE)}
            className={`px-3 py-1.5 rounded-full text-sm ${
              selectedMediaTypes.includes(MEDIA_TYPES.MULTIPLE)
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Multiple Pages
          </button>
        </div>
      </div>

      {/* Tags Filter */}
      <div>
        <h4 className="text-sm font-medium mb-2">Categories</h4>
        <div className="flex flex-wrap gap-2">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-3 py-1.5 rounded-full text-sm ${
                selectedTags.includes(tag)
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <LoadingProvider>
      <main className={josfin.className}>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          
          <div className="max-w-7xl mx-auto p-4 pt-20 pb-20">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Categories</h2>
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <Filter className="w-5 h-5" />
                  <span>Filter</span>
                  {(selectedTags.length > 0 || selectedMediaTypes.length > 0) && (
                    <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">
                      {selectedTags.length + selectedMediaTypes.length}
                    </span>
                  )}
                </button>
              </div>

              {loading ? (
                <div className="text-center py-8">Loading...</div>
              ) : error ? (
                <div className="text-center py-8 text-red-500">{error}</div>
              ) : (
                <>
                  {isFilterOpen && <FilterPanel />}

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredInvites.length === 0 ? (
                      <div className="col-span-full text-center py-8 text-gray-500">
                        No invites found matching your filters.
                      </div>
                    ) : (
                      filteredInvites.map(invite => (
                        <div key={invite._id} className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                          {renderMedia(invite)}
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