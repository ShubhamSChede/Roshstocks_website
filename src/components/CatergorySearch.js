'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { AlertCircle } from 'lucide-react';
import Script from 'next/script';
import Image from 'next/image';


const CategorySearch = () => {
    const [category, setCategory] = useState('');
    const [invites, setInvites] = useState([]);
    const [mediaErrors, setMediaErrors] = useState({});

    const fetchInvites = async () => {
        try {
            const response = await axios.get(`/api/invites?category=${category}`);
            setInvites(response.data);
        } catch (error) {
            console.error('Error fetching invites:', error);
        }
    };

    // Function to reload Instagram embed script
    const reloadInstagramEmbeds = () => {
        if (window.instgrm) {
            window.instgrm.Embeds.process();
        }
    };

    useEffect(() => {
        fetchInvites();
    }, [fetchInvites]);

    // Effect to process Instagram embeds after render
    useEffect(() => {
        reloadInstagramEmbeds();
    }, [invites]);

    const getMediaType = (url) => {
        if (!url) return 'none';
        if (url.includes('youtube.com') || url.includes('youtu.be')) return 'youtube';
        if (url.includes('instagram.com')) return 'instagram';
        return 'unknown';
    };

    const getYouTubeEmbedUrl = (url) => {
        try {
            const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
            const match = url.match(regExp);
            if (!match || match[2].length !== 11) {
                throw new Error('Invalid YouTube URL');
            }
            return `https://www.youtube.com/embed/${match[2]}?autoplay=0&rel=0`;
        } catch (error) {
            return null;
        }
    };

    const getInstagramPostUrl = (url) => {
        // Convert any Instagram URL to a post URL format
        try {
            const regExp = /instagram.com\/(?:p|reel|tv)\/([^/?#&]+)/;
            const match = url.match(regExp);
            if (!match) {
                throw new Error('Invalid Instagram URL');
            }
            return `https://www.instagram.com/p/${match[1]}/`;
        } catch (error) {
            return null;
        }
    };

    const handleMediaError = (inviteId) => {
        setMediaErrors(prev => ({
            ...prev,
            [inviteId]: true
        }));
    };

    const MediaErrorDisplay = () => (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50 p-4">
            <AlertCircle className="w-8 h-8 text-red-500 mb-2" />
            <span className="text-sm text-gray-600 text-center">
                Unable to load media content
            </span>
        </div>
    );

    const renderMedia = (invite) => {
        if (mediaErrors[invite._id]) {
            return <MediaErrorDisplay />;
        }

        if (invite.imageUrl) {
            return (
                <Image 
                    src={invite.imageUrl} 
                    alt={invite.category} 
                    className="w-full h-full object-cover"
                    onError={() => handleMediaError(invite._id)}
                />
            );
        }

        if (invite.ytLink) {
            const mediaType = getMediaType(invite.ytLink);
            
            if (mediaType === 'youtube') {
                const embedUrl = getYouTubeEmbedUrl(invite.ytLink);
                if (!embedUrl) {
                    return <MediaErrorDisplay />;
                }
                return (
                    <div className="w-full h-full flex justify-center">
                        <iframe 
                            src={embedUrl}
                            title={`${invite.category} video`}
                            className="w-[56.25%] h-full" // 9:16 aspect ratio width (inverse of 16:9)
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            onError={() => handleMediaError(invite._id)}
                        ></iframe>
                    </div>
                );
            }
            
            if (mediaType === 'instagram') {
                const postUrl = getInstagramPostUrl(invite.ytLink);
                if (!postUrl) {
                    return <MediaErrorDisplay />;
                }
                return (
                    <div className="w-full flex justify-center">
                        <div className="instagram-embed-container relative w-[56.25%] pb-[177.77%]">
                            {/* 177.77% = (16/9 * 100) for 9:16 aspect ratio */}
                            <blockquote
                                className="instagram-media w-full absolute inset-0 !m-0 !max-w-none"
                                data-instgrm-permalink={postUrl}
                                data-instgrm-version="14"
                                style={{ 
                                    background: '#FFF',
                                    border: '0',
                                    borderRadius: '3px',
                                    boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                                    padding: '0'
                                }}
                            >
                            </blockquote>
                        </div>
                    </div>
                );
            }
        }

        return (
            <div className="w-full h-full flex items-center justify-center bg-gray-50">
                <span className="text-gray-500">No media available</span>
            </div>
        );
    };

    return (
        <>
            <Script 
                src="https://www.instagram.com/embed.js" 
                strategy="lazyOnload"
                onLoad={reloadInstagramEmbeds}
            />
            
            <div className="p-4">
                <input
                    type="text"
                    placeholder="Search by category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full p-2 border rounded mb-4"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {invites.map((invite) => (
                        <div key={invite._id} className="border rounded-lg shadow-md overflow-hidden">
                            <div className="aspect-[9/16] relative bg-gray-100">
                                {/* Changed aspect ratio to 9:16 */}
                                {renderMedia(invite)}
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-2">{invite.category}</h3>
                                <p className="text-gray-600 text-sm mb-2">{invite.description}</p>
                                <p className="text-green-600 font-medium">Est. Price: ${invite.estimatedPrice}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
export default CategorySearch;