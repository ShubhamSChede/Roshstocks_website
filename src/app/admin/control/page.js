"use client";
import React, { useState, useEffect } from 'react';
import { Trash2, Edit, Save, X } from 'lucide-react';

const Alert = ({ children, variant = 'success' }) => {
  const baseClasses = "p-4 mb-4 rounded-lg";
  const variantClasses = variant === 'destructive' 
    ? "bg-red-50 text-red-700 border border-red-200"
    : "bg-green-50 text-green-700 border border-green-200";
    
  return (
    <div className={`${baseClasses} ${variantClasses}`}>
      {children}
    </div>
  );
};

const AdminControl = () => {
  const [invites, setInvites] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [editForm, setEditForm] = useState({
    title: '',
    tags: [],
    media: []
  });

  // Fetch invites
  useEffect(() => {
    const fetchInvites = async () => {
      try {
        const response = await fetch('/api/invites');
        const data = await response.json();
        setInvites(data);
      } catch (err) {
        setError('Failed to fetch invites');
      }
    };
    fetchInvites();
  }, []);

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
      setSuccess('Invite updated successfully');
      setTimeout(() => setSuccess(null), 3000);
    } catch (err) {
      setError('Failed to update invite');
      setTimeout(() => setError(null), 3000);
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
      setSuccess('Invite deleted successfully');
      setTimeout(() => setSuccess(null), 3000);
    } catch (err) {
      setError('Failed to delete invite');
      setTimeout(() => setError(null), 3000);
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Admin Control Panel</h1>
      
      {/* Alerts */}
      {error && (
        <Alert variant="destructive">
          {error}
        </Alert>
      )}
      {success && (
        <Alert>
          {success}
        </Alert>
      )}

      {/* Invites List */}
      <div className="space-y-4">
        {invites.map(invite => (
          <div key={invite._id} className="border rounded-lg p-4 bg-white shadow-sm">
            {editingId === invite._id ? (
              // Edit Form
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
              // Display View
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
    </div>
  );
};

export default AdminControl;