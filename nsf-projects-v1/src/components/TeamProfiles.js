// components/TeamProfiles.js
import React from 'react';

const TeamProfiles = () => {
  // This would typically fetch data from an API
  const teams = [
    { id: 1, name: 'Team A', description: 'A promising young team', members: 20, needs: ['New training ground', 'Equipment', 'Coaching staff'] },
    { id: 2, name: 'Team B', description: 'Experienced league champions', members: 25, needs: ['Facility renovation', 'Youth program funding', 'Transportation'] },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Team Profiles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teams.map(team => (
          <div key={team.id} className="bg-white shadow-md rounded-lg p-6">
            <img src={`/api/placeholder/100/100`} alt={team.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">{team.name}</h2>
            <p className="text-gray-600 mb-2">{team.description}</p>
            <p className="text-sm text-gray-500 mb-4">Members: {team.members}</p>
            <h3 className="font-semibold mb-2">Team Needs:</h3>
            <ul className="list-disc list-inside">
              {team.needs.map((need, index) => (
                <li key={index} className="text-sm">{need}</li>
              ))}
            </ul>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Support Team</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamProfiles;