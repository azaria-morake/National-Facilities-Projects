// components/ResourcesPage.js
import React from 'react';

const ResourcesPage = () => {
  const resources = [
    { id: 1, title: 'Effective Training Techniques', type: 'Video', author: 'Coach Smith', authorPic: '/api/placeholder/50/50' },
    { id: 2, title: 'Facility Maintenance Guide', type: 'Document', author: 'Groundskeeper Johnson', authorPic: '/api/placeholder/50/50' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Resources</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map(resource => (
          <div key={resource.id} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">{resource.title}</h2>
            <p className="text-gray-600 mb-2">Type: {resource.type}</p>
            <div className="flex items-center mb-4">
              <img src={resource.authorPic} alt={resource.author} className="w-10 h-10 rounded-full mr-2" />
              <span className="text-sm text-gray-500">{resource.author}</span>
            </div>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              {resource.type === 'Video' ? 'Watch' : 'Download'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourcesPage;