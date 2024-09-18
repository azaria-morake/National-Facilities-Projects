// components/ChampionshipPage.js
import React from 'react';

const ChampionshipPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">NSF Project Championship</h1>
      <p className="text-lg mb-4">
        Join us for the annual National Soccer Facilities Project Championship, where teams showcase their improved performance and celebrate the impact of better training facilities.
      </p>
      <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600">
        Register Your Team
      </button>
    </div>
  );
};

export default ChampionshipPage;