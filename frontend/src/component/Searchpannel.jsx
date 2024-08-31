import { Link } from 'react-router-dom';
import '../style.css'; // Import your CSS file here
import { useState } from 'react';
import firstback2 from './Images/Backgrounds/firstback2.png'
import plane from './Images/Icon/plane.svg'
import bus from './Images/Icon/bus.svg'
import hotel from './Images/Icon/hotel.svg'

const Searchpannel = () => {
  const [tripType, setTripType] = useState('round-trip');
  const [classType, setClassType] = useState('economy');
  const [travellers, setTravellers] = useState(1);

  return (
    <div>
      <section className="hero">
        <div className="mainback">
          <img src={firstback2} alt="Background" />
        </div>
        <div className="searchbox">
          <div className="bigbox">
            <div className="whitebox">
              <div className="container">
                <div className="hero-content">
                  <div className="hero-left">
                    <div className="search-box">
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
                  <div className="hero-right">
                    <div className="line"></div>
                    <div className="trip-type">
                      <input
                        type="radio"
                        id="one-way"
                        name="trip-type"
                        value="one-way"
                        checked={tripType === 'one-way'}
                        onChange={() => setTripType('one-way')}
                      />
                      <label htmlFor="one-way">One Way</label>
                      <input
                        type="radio"
                        id="round-trip"
                        name="trip-type"
                        value="round-trip"
                        checked={tripType === 'round-trip'}
                        onChange={() => setTripType('round-trip')}
                      />
                      <label htmlFor="round-trip">Round Trip</label>
                    </div>
                    <div className="dates">
                      <div className="departure">
                        <label htmlFor="departure">Departure</label>
                        <input type="date" id="departure" />
                      </div>
                      <div className="line2"></div>
                      <div className="return">
                        <label htmlFor="return">Return</label>
                        <input type="date" id="return" />
                      </div>
                    </div>
                    <div className="CandT">
                      <div className="radio-toolbar">
                        <h4>Class</h4>
                        <input
                          type="radio"
                          id="radioEconomyClass"
                          name="classType"
                          value="economy"
                          checked={classType === 'economy'}
                          onChange={() => setClassType('economy')}
                        />
                        <label htmlFor="radioEconomyClass">Economy Class</label>
                        <input
                          type="radio"
                          id="radioFirstClass"
                          name="classType"
                          value="first"
                          checked={classType === 'first'}
                          onChange={() => setClassType('first')}
                        />
                        <label htmlFor="radioFirstClass">First Class</label>
                      </div>
                      <div className="travellers">
                        <label htmlFor="travellers">Travellers</label>
                        <input
                          type="number"
                          id="travellers"
                          min="1"
                          max="6"
                          value={travellers}
                          onChange={(e) => setTravellers(Number(e.target.value))}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="icons">
              <Link to="/">
                <div className="plane">
                  <img src={plane} alt="Plane Icon" className="planeimg" />
                  Flights
                </div>
              </Link>
              <Link to="/hotelpage">
                <div className="hotel">
                  <img src={hotel} alt="Hotel Icon" />
                  Hotels
                </div>
              </Link>
              <Link to="/buspage">
                <div className="bus">
                  <img src={bus} alt="Bus Icon" />
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
    </div>
  );
};

export default Searchpannel;