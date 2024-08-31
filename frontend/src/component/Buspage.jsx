import React from 'react';
import { Link } from 'react-router-dom';
import './../css/bus.css';
import firstback2 from './Images/Backgrounds/firstback2.png';
import planeImg from './Images/Icon/plane.svg';
import hotelImg from './Images/Icon/hotel.svg';
import busImg from './Images/Icon/bus.svg';
import suratImg from './Images/Backgrounds/surat.jpg';
import bangaloreImg from './Images/Backgrounds/bangalore.jpg';
import coimbatoreImg from './Images/Backgrounds/coimbatore.jpg';
import gatewayImg from './Images/Backgrounds/gateway.jpg';
import ahmedabadImg from './Images/Backgrounds/ahmedabad.jpg';
import hydrabadImg from './Images/Backgrounds/hydrabad.jpg';
import kolkataImg from './Images/Backgrounds/kolkata.jpg';
import delhiImg from './Images/Backgrounds/delhi.jpg';
import chennaiImg from './Images/Backgrounds/chennai.jpg';
import tajImg from './Images/Backgrounds/taj.jpg';
import goldenTempleImg from './Images/Backgrounds/golden-temple.jpg';
import goaImg from './Images/Backgrounds/goa.jpg';
import shimlaImg from './Images/Backgrounds/shimla.jpg';

const Buspage = () => {
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
                                    <div className="hero-content2">
                                        <div className="hero-left2">
                                            <div className="search-box2">
                                                <div className="from">
                                                    <label htmlFor="from">From</label>
                                                    <input type="text" id="from" placeholder="SURAT" />
                                                </div>
                                                <div className="to">
                                                    <label htmlFor="to">To</label>
                                                    <input type="text" id="to" placeholder="MUMBAI" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hero-right2">
                                            <div className="line"></div>
                                            <div className="dates2">
                                                <div className="departure">
                                                    <label htmlFor="departure">Travel Date</label>
                                                    <input type="date" id="departure" />
                                                </div>
                                                <div className="line2"></div>
                                                <div className="radio-toolbarAC">
                                                    <input type="radio" id="radioAC" name="radioACType" value="AC" defaultChecked />
                                                    <label htmlFor="radioAC">AC</label>
                                                    <input type="radio" id="radioNonAC" name="radioACType" value="Non AC" />
                                                    <label htmlFor="radioNonAC">Non AC</label>
                                                </div>
                                            </div>
                                            <div className="CandT2">
                                                <div className="radio-toolbar2">
                                                    <h4>Seat Type</h4>
                                                    <input type="radio" id="radioSeater" name="radioSeatType" value="Seater" defaultChecked />
                                                    <label htmlFor="radioSeater">Seater</label>
                                                    <input type="radio" id="radioSleeper" name="radioSeatType" value="Sleeper" />
                                                    <label htmlFor="radioSleeper">Sleeper</label>
                                                </div>
                                                <div className="travellers2">
                                                    <label htmlFor="travellers2">Travellers</label>
                                                    <input type="number" id="travellers" min="1" max="6" value="1" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="icons">
                                <Link to="/">
                                    <div className="plane2">
                                        <img src={planeImg} alt="Plane Icon" className="planeimg" />
                                        Flights
                                    </div>
                                </Link>
                                <Link to="/hotelpage">
                                    <div className="hotel">
                                        <img src={hotelImg} alt="Hotel Icon" />
                                        Hotels
                                    </div>
                                </Link>
                                <Link to="/bu
                                
                                
                                
                                sepage">
                                    <div className="bus2">
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

                <section className="explore-world">
                    <div className="container">
                        <h2>Destinations</h2>
                        <div className="destinations">
                            <div className="destination">
                                <img src={suratImg} alt="Surat to Mumbai" className="destination-image" />
                                <div className="d2">
                                    <div className="destination-title">Buses From Surat To</div>
                                    <div className="destination-description">Mumbai, Rajkot, Ahmedabad, Vadodara</div>
                                </div>
                            </div>
                            <div className="destination">
                                <img src={bangaloreImg} alt="Bangalore to Mumbai" className="destination-image" />
                                <div className="d2">
                                    <div className="destination-title">Buses From Bangalore To</div>
                                    <div className="destination-description">Mumbai, Chennai, Goa, Hyderabad</div>
                                </div>
                            </div>
                            <div className="destination">
                                <img src={coimbatoreImg} alt="Coimbatore to Mumbai" className="destination-image" />
                                <div className="d2">
                                    <div className="destination-title">Buses From Coimbatore To</div>
                                    <div className="destination-description">Chennai, Bangalore, Madurai, Pondicherry</div>
                                </div>
                            </div>
                            <div className="destination">
                                <img src={gatewayImg} alt="Mumbai to Surat" className="destination-image" />
                                <div className="d2">
                                    <div className="destination-title">Buses From Mumbai To</div>
                                    <div className="destination-description">Pune, Goa, Bangalore, Surat</div>
                                </div>
                            </div>
                            <div className="destination">
                                <img src={ahmedabadImg} alt="Ahmedabad to Mumbai" className="destination-image" />
                                <div className="d2">
                                    <div className="destination-title">Buses From Ahmedabad To</div>
                                    <div className="destination-description">Mumbai, Pune, Bangalore, Goa</div>
                                </div>
                            </div>
                            <div className="destination">
                                <img src={hydrabadImg} alt="Hyderabad to Mumbai" className="destination-image" />
                                <div className="d2">
                                    <div className="destination-title">Buses From Hyderabad To</div>
                                    <div className="destination-description">Bangalore, Chennai, Pune, Vijaywada</div>
                                </div>
                            </div>
                            <div className="destination">
                                <img src={kolkataImg} alt="Kolkata to Mumbai" className="destination-image" />
                                <div className="d2">
                                    <div className="destination-title">Buses From Kolkata To</div>
                                    <div className="destination-description">Durgapur, Asansol, Bhubaneshwar, Bardhaman</div>
                                </div>
                            </div>
                            <div className="destination">
                                <img src={delhiImg} alt="Delhi to Mumbai" className="destination-image" />
                                <div className="d2">
                                    <div className="destination-title">Buses From Delhi To</div>
                                    <div className="destination-description">Dehradun, Manali, Kanpur, Lucknow</div>
                                </div>
                            </div>
                            <div className="destination">
                                <img src={chennaiImg} alt="Chennai to Mumbai" className="destination-image" />
                                <div className="d2">
                                    <div className="destination-title">Buses From Chennai To</div>
                                    <div className="destination-description">Bangalore, Coimbatore, Madurai, Trichy</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="trending-destinations">
                    <div className="container">
                        <h2>Trending Destinations</h2>
                        <p style={{ marginTop: '-20px', fontSize: '.8em' }}>Most Popular Choices for Travelers in India</p>
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
            </main>
        </div>
    );
};

export default Buspage;
