import React from 'react';
import dubaiImg from './Images/Backgrounds/dubai.jpg';
import singaporeImg from './Images/Backgrounds/singapore.jpg';
import greatWallImg from './Images/Backgrounds/great-wall.jpg';
import pyramidImg from './Images/Backgrounds/pyramid.jpg';
import tajImg from './Images/Backgrounds/taj.jpg';
import gatewayImg from './Images/Backgrounds/gateway.jpg';
import goldenTempleImg from './Images/Backgrounds/golden-temple.jpg';
import goaImg from './Images/Backgrounds/goa.jpg';
import shimlaImg from './Images/Backgrounds/shimla.jpg';

const Exploral = () => {
  return (
    <div>
      <section className="explore-world">
        <div className="container">
          <h2>Explore World</h2>
          <p style={{ marginTop: '-20px', fontSize: '.8em' }}>
            Find Deals on International Flights
          </p>
          <div className="explore-world-grid">
            <div className="card">
              <img src={dubaiImg} alt="Dubai" />
              <h3>Dubai</h3>
              <p>Flights from Sardar Vallabhbhai Patel International Airport<br />Aug 1 - Aug 11 - Round Trip</p>
            </div>
            <div className="card">
              <img src={singaporeImg} alt="Singapore" />
              <h3>Singapore</h3>
              <p>Flights from Sardar Vallabhbhai Patel International Airport<br />Aug 12 - Aug 17 - Round Trip</p>
            </div>
            <div className="card">
              <img src={greatWallImg} alt="The Great Wall of China" />
              <h3>The Great Wall of China</h3>
              <p>Flights from Sardar Vallabhbhai Patel International Airport<br />Sep 1 - Sep 7 - Round Trip</p>
            </div>
            <div className="card">
              <img src={pyramidImg} alt="The Great Pyramid of Giza" />
              <h3>The Great Pyramid of Giza</h3>
              <p>Flights from Sardar Vallabhbhai Patel International Airport<br />Sep 4 - Sep 11 - Round Trip</p>
            </div>
          </div>
        </div>
      </section>

      <section className="trending-destinations">
        <div className="container">
          <h2>Trending Destinations</h2>
          <p style={{ marginTop: '-20px', fontSize: '.8em' }}>
            Most Popular Choices for Travelers in India
          </p>
          <div className="trending-destinations-grid">
            <div className="card">
              <img src={tajImg} alt="Taj Mahal" />
              <h3>Taj Mahal</h3>
            </div>
            <div className="card">
              <img src={gatewayImg} alt="Gateway of India" />
              <h3>Gateway of India</h3>
            </div>
            <div className="card">
              <img src={goldenTempleImg} alt="Golden Temple" />
              <h3>Golden Temple</h3>
            </div>
            <div className="card">
              <img src={goaImg} alt="Goa" />
              <h3>Goa</h3>
            </div>
            <div className="card">
              <img src={shimlaImg} alt="Shimla" />
              <h3>Shimla</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Exploral;
