// components/HomePage.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">National Soccer Facilities Project</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">About Our Project</h2>
        <p className="text-lg">
          The National Soccer Facilities Project aims to improve overall performance in soccer by helping teams from all over South Africa gain access to quality training facilities.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Goals</h2>
        <ul className="list-disc list-inside text-lg">
          <li>Provide a centralized hub for teams to showcase their facility requirements</li>
          <li>Facilitate donations and sponsorships to improve training facilities</li>
          <li>Promote collaboration and knowledge sharing among teams</li>
          <li>Foster a sense of community among soccer enthusiasts</li>
          <li>Organize an annual championship to celebrate achievements</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Featured Teams</h2>
        <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={5000}>
          <div>
            <img src="/api/placeholder/800/400" alt="Team 1" />
            <p className="legend">Team 1 - Seeking new training ground</p>
          </div>
          <div>
            <img src="/api/placeholder/800/400" alt="Team 2" />
            <p className="legend">Team 2 - Fundraising for equipment</p>
          </div>
          <div>
            <img src="/api/placeholder/800/400" alt="Team 3" />
            <p className="legend">Team 3 - Building a community pitch</p>
          </div>
        </Carousel>
      </section>
    </div>
  );
};

export default HomePage;