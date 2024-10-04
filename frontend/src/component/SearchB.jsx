import React, { useEffect, useState } from 'react';
import '../css/busticket.css'; // Assuming styles are kept in a separate CSS file
import { useParams } from 'react-router-dom'; // For routing parameters

// Updated BusTicketCard component to accept the correct props based on the schema
const BusTicketCard = ({ busName, departureTime, departureCity, totalTime, destinationTime, destinationCity, price, tripType, busClass }) => {
    return (
        <div className="bus-ticketcard">
            <h2 className="bus-ticketcard-title">{busName}</h2>
            <div className="bus-ticketcard-info">
                <div>
                    <p className="departure-time">{departureTime}</p>
                    <p className="departure-city">{departureCity}</p>
                </div>
                <div>
                    <p className="total-bus-time">{totalTime}</p>
                </div>
                <div>
                    <p className="destination-time">{destinationTime}</p>
                    <p className="destination-city">{destinationCity}</p>
                </div>
                <div className="bus-ticketcard-price">
                    ₹{price}
                </div>
            </div>
            <p className="bus-ticket-trip-type">{tripType}</p>
            <p className="bus-ticket-class">{busClass}</p>
            <button className="bus-ticketcard-button">Book Bus</button>
        </div>
    );
};

const BusTickets = () => {
    const [bus, setBus] = useState([]);
    const { key } = useParams(); // Get the search key from URL params

    const getBus = async () => {
        try {
            let response = await fetch(`http://localhost:5000/searchbus/${key}`);
            if (!response.ok) {
                const errorText = await response.text(); // Get the error text from the response
                console.error('Error fetching data:', errorText);
                alert('Network response was not ok');
                return;
            }
            const data = await response.json();
            setBus(data);
        } catch (error) {
            console.error('Fetch error:', error);
            setBus([]);
        }
    };

    useEffect(() => {
        getBus(); // Fetch the bus data on component mount
    }, [key]);

    return (
        <div>
            <h1 style={{ marginLeft: '60px', position: 'absolute' }}>- Bus Tickets</h1>
            <div className="bus-ticketcontainer" style={{ textAlign: 'center' }}>
                {bus.length > 0 ? (
                    bus.map((busItem, index) => (
                        <BusTicketCard
                            key={busItem._id}
                            busName={busItem.bus_name}
                            departureTime={new Date(busItem.departure_time).toLocaleString()}  //{/* Use 'departure_time' */}
                            departureCity={busItem.departure_place}
                            totalTime={busItem.duration}  //{/* Use 'duration' */}
                            destinationTime={new Date(busItem.arrival_time).toLocaleString()}  //{/* Use 'arrival_time' */}
                            destinationCity={busItem.arrival_city}
                            price={busItem.price}
                            tripType={busItem.trip_type}  //{/* Use 'trip_type' */}
                            busClass={busItem.bus_class}  //{/* Use 'bus_class' */}
                        />
                    ))
                ) : (
                    <h1>No Results Found</h1>
                )}
            </div>
        </div>
    );
};

export default BusTickets;
