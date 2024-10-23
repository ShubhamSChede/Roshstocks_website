'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';

const CategorySearch = () => {
    const [category, setCategory] = useState('');
    const [invites, setInvites] = useState([]);

    const fetchInvites = async () => {
        try {
            const response = await axios.get(`/api/invites?category=${category}`);
            setInvites(response.data);
        } catch (error) {
            console.error('Error fetching invites:', error);
        }
    };

    useEffect(() => {
        fetchInvites();
    }, [category]);

    return (
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
                        <div className="aspect-video relative">
                            {invite.imageUrl ? (
                                <img 
                                    src={invite.imageUrl} 
                                    alt={invite.category} 
                                    className="w-full h-full object-cover"
                                />
                            ) : invite.ytLink ? (
                                <iframe 
                                    width="100%" 
                                    height="100%" 
                                    src={invite.ytLink} 
                                    frameBorder="0" 
                                    allowFullScreen
                                    className="absolute inset-0"
                                ></iframe>
                            ) : (
                                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                    No media available
                                </div>
                            )}
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
    );
};

export default CategorySearch;