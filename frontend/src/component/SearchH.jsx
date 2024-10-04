import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../css/hotelTicket.css';
import useAuthStore from './store/authstore';

const SearchH = () => {
    const [hotels, setHotels] = useState([]);
    const authuser = useAuthStore(state => state.user); //heve the details of login user and also users object id
    const { key } = useParams();

    const getHotels = async () => {
        try {
            let response = await fetch(`http://localhost:5000/searchhotel/${key}`);
            if (!response.ok) {
                const errorText = await response.text(); // Get error details from response
                console.error('Error fetching data:', errorText); // Log the error for debugging
                alert(`Error: ${errorText || 'Network response was not ok'}`); // Alert user with error message
                return; // Exit the function if there's an error
            }
            const data = await response.json();
            setHotels(data);
        } catch (error) {
            console.log('Fetch error:', error);
            setHotels([]);
        }
    }

    const bookRoom = async (hotel) => {
        try {
            const ticketData = {
                user_id: authuser._id, // User ID from the authenticated user
                ticket_type: 'hotel', // Ticket type
                ticket_data: {
                    hotel_name: hotel.hotel_name,
                    checkin_time: hotel.checkin_time,
                    checkin_date: hotel.checkin_date,
                    checkout_time: hotel.checkout_time,
                    checkout_date: hotel.checkout_date,
                    nights: hotel.nights,
                    price: hotel.price,
                    room_type: hotel.room_type
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
                console.error('Error booking room:', errorText);
                alert(`Error: ${errorText || 'Unable to book room'}`);
                return;
            }

            const result = await response.json();
            alert('Room booked successfully!'); // Notify the user of success
            console.log('Booking result:', result); // Log the booking result

        } catch (error) {
            console.log('Booking error:', error);
            alert('An error occurred while booking the room.');
        }
    }

    useEffect(() => {
        getHotels();
    }, [key]);

    return (
        <div>
            <h1 style={{ marginLeft: '60px', textAlign: 'center' }}>-Hotel Bookings</h1>
            <div className="hotel-bookingcontainer">
                {hotels.length > 0 ? (
                    hotels.map((hotel, index) => (
                        <div key={hotel._id} className="hotel-bookingcard">
                            <h2 className="hotel-bookingcard-title">{hotel.hotel_name}</h2>
                            <div className="hotel-bookingcard-info">
                                <div>
                                    <p className="checkin-time">{hotel.checkin_time}</p>
                                    <p className="checkin-date">{hotel.checkin_date}</p>
                                </div>
                                <div>
                                    <p className="nights">{hotel.nights}</p>
                                </div>
                                <div>
                                    <p className="checkout-time">{hotel.checkout_time}</p>
                                    <p className="checkout-date">{hotel.checkout_date}</p>
                                </div>
                                <div className="hotel-bookingcard-price">
                                    ₹{hotel.price.toFixed(2)}
                                </div>
                            </div>
                            <p className="hotel-booking-room">{hotel.room_type}</p>
                            <button
                                className="hotel-bookingcard-button"
                                onClick={() => bookRoom(hotel)} // Fix: Use an arrow function
                            >
                                Book Room
                            </button>
                        </div>
                    ))
                ) : (
                    <h1>No Results Found</h1>
                )}
            </div>
        </div>
    );
}

export default SearchH;