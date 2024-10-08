import React, { useEffect, useState } from 'react';
import '../css/busticket.css'; // Assuming styles are kept in a separate CSS file
import '../css/style.css';
import { useParams } from 'react-router-dom'; // For routing parameters
import useAuthStore from './store/authstore'; // For accessing authenticated user details

// Updated BusTicketCard component to accept the correct props based on the schema
const BusTicketCard = ({ busName, departureTime, departureCity, totalTime, destinationTime, destinationCity, price, tripType, busClass, onBook }) => {
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
            <button className="bus-ticketcard-button" onClick={onBook}>Book Bus</button>
        </div>
    );
};

const BusTickets = () => {
    const [bus, setBus] = useState([]);
    const { key } = useParams(); // Get the search key from URL params
    const authuser = useAuthStore(state => state.user); // Get the details of the logged-in user

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

    const bookBus = async (busItem) => {
        try {
            const ticketData = {
                user_id: authuser._id, // User ID from the authenticated user
                ticket_type: 'bus', // Ticket type
                ticket_data: {
                    bus_name: busItem.bus_name,
                    departure_time: busItem.departure_time,
                    departure_place: busItem.departure_place,
                    arrival_time: busItem.arrival_time,
                    arrival_city: busItem.arrival_city,
                    duration: busItem.duration,
                    price: busItem.price,
                    trip_type: busItem.trip_type,
                    bus_class: busItem.bus_class,
                }
            };

            const response = await fetch('http://localhost:5000/user/ticket', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(ticketData), // Send the ticket data as JSON
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error('Error booking bus:', errorText);
                alert(`Error: ${errorText || 'Unable to book bus'}`);
                return;
            }

            const result = await response.json();
            alert('Bus booked successfully!'); // Notify the user of success
            console.log('Booking result:', result); // Log the booking result

        } catch (error) {
            console.error('Booking error:', error);
            alert('An error occurred while booking the bus.');
        }
    };

    useEffect(() => {
        getBus(); // Fetch the bus data on component mount
    }, [key]);

    return (
        <div>
            <h1 style={{ marginLeft: '60px', textAlign: 'center' }}>- Bus Tickets</h1>
            <div className="bus-ticketcontainer" style={{ }}>
                {bus.length > 0 ? (
                    bus.map((busItem) => (
                        <BusTicketCard
                            key={busItem._id}
                            busName={busItem.bus_name}
                            departureTime={busItem.departure_time} 
                            departureCity={busItem.departure_place}
                            totalTime={busItem.duration} 
                            destinationTime={busItem.arrival_time} 
                            destinationCity={busItem.arrival_city}
                            price={busItem.price}
                            tripType={busItem.trip_type} 
                            busClass={busItem.bus_class} 
                            onBook={() => bookBus(busItem)} // Pass the bus item to the booking function
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
