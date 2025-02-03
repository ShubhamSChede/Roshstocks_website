'use client';
import { useState, useEffect } from 'react';
import { Trash2, Edit, Save, X } from 'lucide-react';

const ManageInvites = ({ onSuccess, onError }) => {
  const [invites, setInvites] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    title: '',
    tags: [],
    media: []
  });

  useEffect(() => {
    fetchInvites();
  }, []);

  const fetchInvites = async () => {
    try {
      const response = await fetch('/api/invites');
      const data = await response.json();
      setInvites(data);
    } catch (err) {
      onError('Failed to fetch invites');
    }
  };

  const handleEdit = (invite) => {
    setEditingId(invite._id);
    setEditForm({
      title: invite.title,
      tags: invite.tags,
      media: invite.media
    });
  };

  const handleUpdate = async (id) => {
    try {
      const response = await fetch(`/api/invites/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editForm),
      });

      if (!response.ok) throw new Error('Failed to update invite');

      const updatedInvite = await response.json();
      setInvites(invites.map(invite => 
        invite._id === id ? updatedInvite : invite
      ));
      setEditingId(null);
      onSuccess('Invite updated successfully');
    } catch (err) {
      onError('Failed to update invite');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this invite?')) return;

    try {
      const response = await fetch(`/api/invites/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete invite');

      setInvites(invites.filter(invite => invite._id !== id));
      onSuccess('Invite deleted successfully');
    } catch (err) {
      onError('Failed to delete invite');
    }
  };

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

  return (
    <div className="space-y-4">
      {invites.map(invite => (
        <div key={invite._id} className="border rounded-lg p-4 bg-white shadow-sm">
          {editingId === invite._id ? (
            <div className="space-y-4">
              <input
                type="text"
                value={editForm.title}
                onChange={(e) => setEditForm({...editForm, title: e.target.value})}
                className="w-full p-2 border rounded"
                placeholder="Title"
              />
              <input
                type="text"
                value={editForm.tags.join(', ')}
                onChange={(e) => setEditForm({
                  ...editForm,
                  tags: e.target.value.split(',').map(tag => tag.trim())
                })}
                className="w-full p-2 border rounded"
                placeholder="Tags (comma separated)"
              />
              <div className="flex gap-2">
                <button
                  onClick={() => handleUpdate(invite._id)}
                  className="flex items-center gap-2 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  <Save size={16} />
                  Save
                </button>
                <button
                  onClick={() => setEditingId(null)}
                  className="flex items-center gap-2 px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
                >
                  <X size={16} />
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold">{invite.title}</h2>
                  <div className="mt-2 space-x-2">
                    {invite.tags.map((tag, index) => (
                      <span key={index} className="inline-block bg-gray-100 px-2 py-1 rounded text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(invite)}
                    className="flex items-center gap-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    <Edit size={16} />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(invite._id)}
                    className="flex items-center gap-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    <Trash2 size={16} />
                    Delete
                  </button>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
                {invite.media.map((item, index) => (
                  <div key={index} className="relative aspect-video">
                    {item.type === 'photo' ? (
                      <img
                        src={item.url}
                        alt={`Media ${index + 1}`}
                        className="w-full h-full object-cover rounded"
                      />
                    ) : item.isYoutubeVideo ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${getYoutubeVideoId(item.url)}`}
                        className="w-full h-full rounded"
                        allowFullScreen
                      />
                    ) : (
                      <video
                        src={item.url}
                        className="w-full h-full object-cover rounded"
                        controls
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ManageInvites;