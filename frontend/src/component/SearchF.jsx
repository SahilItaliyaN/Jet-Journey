import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../css/flightticket.css'

const SearchF = () => {
    const [flights, setFlights] = useState([]);
    const { key } = useParams(); 

    const getFlights = async () => {
        try {
            let response = await fetch(`http://localhost:5000/searchflight/${key}`);
            console.log(response);
            
            if (!response.ok) {
                const errorText = await response.text();
                console.error('Error fetching data:', errorText);
                alert('Network response was not ok');
                return;
            }

            const data = await response.json();
            console.log(data);
            setFlights(data);
        } catch (error) {
            console.error('Fetch error:', error);
            setFlights([]);
        }
    };

    useEffect(() => {
        getFlights();
    }, [key]);

    return (
        <div>
            <h1 style={{ marginLeft: '60px', position: 'absolute' }}>-Flight Tickets</h1>
            <div className="ticketcontainer" style={{ textAlign: 'center' }}>
                {flights.length > 0 ? (
                    flights.map((flight, index) => (
                        <div className="ticketcard" key={flight.flight_number} style={{ backgroundColor: '#ececec', borderRadius: '10px', padding: '30px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', width: '80%', marginBottom: '30px' }}>
                            <h2 className="ticketcard-title">{flight.airline_name}</h2>
                            <div className="ticketcard-info" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                                <div className="ticketcard-details">
                                    <p className="flight-name" style={{ margin: 0 }}>{flight.flight_number}</p>
                                </div>
                                <div>
                                    <p className="departure-time">{new Date(flight.departure_time).toLocaleTimeString()}</p>
                                    <p className="departure-city">{flight.departure_place}</p>
                                </div>
                                <div>
                                    <p className="total-flight-time">{flight.flight_duration}</p>
                                </div>
                                <div>
                                    <p className="destination-time">{new Date(flight.arrival_time).toLocaleTimeString()}</p>
                                    <p className="destination-city">{flight.arrival_city}</p>
                                </div>
                                <div className="ticketcard-price" style={{ fontSize: '34px', fontWeight: 'bold', color: '#000000' }}>
                                    ₹{flight.price.toFixed(2)}
                                </div>
                            </div>
                            <p className="ticket-trip-type" style={{ fontWeight: '700', justifyContent: 'center' }}>{flight.trip_type}</p>
                            <p className="ticket-class" style={{ fontWeight: '700' }}>{flight.flight_class}</p>
                            <button className="ticketcard-button" style={{ backgroundColor: '#000000', color: '#fff3d9', padding: '10px 20px', marginTop: '-50px', width: '15em', borderRadius: '15px', border: 'none', cursor: 'pointer', fontSize: '20px', fontWeight: 'bold' }}>
                                Book Flight
                            </button>
                        </div>
                    ))
                ) : (
                    <h1>No Results Found</h1>
                )}
            </div>
        </div>
    );
};

export default SearchF;
