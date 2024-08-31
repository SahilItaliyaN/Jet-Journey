import React from 'react';
import { Link } from 'react-router-dom';
import firstback2 from './Images/Backgrounds/firstback2.png';
import planeImg from './Images/Icon/plane.svg';
import busImg from './Images/Icon/bus.svg';
import hotelImg from './Images/Icon/hotel.svg';
import tajHotelImg from './Images/Backgrounds/taj hotel.avif';
import wildflowerImg from './Images/Backgrounds/wildflower.jpg';
import udaivilasImg from './Images/Backgrounds/udaivilas.jpg';
import tajSkylineImg from './Images/Backgrounds/taj skyline.webp';
import './../css/hotel.css'
import '../style.css'; // Import your CSS file here

const Hotelpage = () => {
  return (
    <div>
      <main>
        <section className="hero">
          <div className="mainback">
            <img src={firstback2} alt="Background" />
          </div>
          <div className="searchbox">
            <div className="bigbox">
              <div className="whitebox">
                <div className="container">
                  <div className="hero-content3">
                    <div className="hero-left3">
                      <div className="search-box3">
                        <div className="to3">
                          <h4>City, Property Name or Location</h4>
                          <p>Which Place you want to Visit</p>
                          <input type="text" id="to" placeholder="SURAT" />
                        </div>
                      </div>
                    </div>
                    <div className="hero-right3">
                      <div className="line"></div>
                      <div className="dates3">
                        <div className="departure3">
                          <label htmlFor="check-in">Check-In</label>
                          <input type="date" id="check-in" />
                        </div>
                        <div className="line2"></div>
                        <div className="return3">
                          <label htmlFor="check-out">Check-Out</label>
                          <input type="date" id="check-out" />
                        </div>
                      </div>
                      <div className="CandT3">
                        <div className="rooms">
                          <label htmlFor="rooms">Rooms</label>
                          <input type="number" id="rooms" min="1" max="3" value="1" />
                        </div>
                        <div className="line3"></div>
                        <div className="travellers3">
                          <label htmlFor="travellers3">Travellers</label>
                          <input type="number" id="travellers3" min="1" max="6" value="1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="icons">
                <Link to="/">
                  <div className="plane3">
                    <img src={planeImg} alt="Plane Icon" className="planeimg" />
                    Flights
                  </div>
                </Link>
                <Link to="/hotelpage">
                  <div className="hotel3">
                    <img src={hotelImg} alt="Hotel Icon" />
                    Hotels
                  </div>
                </Link>
                <Link to="/busepage">
                  <div className="bus">
                    <img src={busImg} alt="Bus Icon" />
                    Buses
                  </div>
                </Link>
              </div>
            </div>
            <div className="searchbtn">
              <button>Search</button>
            </div>
          </div>
        </section>

        <div className="container">
          <h2 className="hoteltitle">Top Hotels in India</h2>
          <p className="hotelsubtitle">Find Great Deals on Top Hotels</p>
          <div className="mainhotel-card">
            <div className="hotel-card">
              <div className="image">
                <img src={tajHotelImg} alt="Taj Mahal Palace Hotel" />
              </div>
              <div className="content">
                <h2>The Taj Mahal Palace</h2>
                <p>Mumbai</p>
                <div className="rating">
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                </div>
                <div className="price">₹17293 <span>per night</span></div>
              </div>
            </div>
            <div className="hotel-card">
              <div className="image">
                <img src={wildflowerImg} alt="Wildflower Hall, An Oberoi Resort" />
              </div>
              <div className="content">
                <h2>Wildflower Hall, Oberoi Resort</h2>
                <p>Shimla</p>
                <div className="rating">
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                </div>
                <div className="price">₹37651 <span>per night</span></div>
              </div>
            </div>
            <div className="hotel-card">
              <div className="image">
                <img src={udaivilasImg} alt="The Oberoi Udaivilas Hotel" />
              </div>
              <div className="content">
                <h2>The Oberoi Udaivilas</h2>
                <p>Udaipur</p>
                <div className="rating">
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                </div>
                <div className="price">₹76248 <span>per night</span></div>
              </div>
            </div>
            <div className="hotel-card">
              <div className="image">
                <img src={tajSkylineImg} alt="Taj Skyline Hotel" />
              </div>
              <div className="content">
                <h2>Taj Skyline</h2>
                <p>Ahmedabad</p>
                <div className="rating">
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                </div>
                <div className="price">₹5537 <span>per night</span></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hotelpage;
