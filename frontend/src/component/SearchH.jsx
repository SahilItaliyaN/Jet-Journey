import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../css/hotelTicket.css';

const SearchH = () => {
    const [hotels, setHotels] = useState([]);
    const { key } = useParams(); 

    const getHotels = async () => {
        try {
            let response = await fetch(`http://localhost:5000/searchhotel/${key}`);
            if (!response.ok) {
                const errorText = await response.text(); // Get the error text from the response
                console.error('Error fetching data:', errorText); // Log error text
                alert('Network response was not ok');
                return;
            }
            const data = await response.json();
            setHotels(data);
        } catch (error) {
            console.error('Fetch error:', error);
            setHotels([]);
        }
    }

    useEffect(() => {
        getHotels();
    }, [key]);

    return (
        <div>
            <h1 style={{ marginLeft: '60px', position: 'absolute' }}>-Hotel Bookings</h1>
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
                            <button className="hotel-bookingcard-button">Book Room</button>
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


// [eslint] Plugin "react" was conflicted between "package.json » eslint-config-react-app » E:\College\sem-5\Jet-journey\frontend\node_modules\eslint-config-react-app\base.js" and "BaseConfig » E:\College\sem-5\Jet-Journey\frontend\node_modules\eslint-config-react-app\base.js".
// ERROR in [eslint] Plugin "react" was conflicted between "package.json » eslint-config-react-app » E:\College\sem-5\Jet-journey\frontend\node_modules\eslint-config-react-app\base.js" and "BaseConfig » E:\College\sem-5\Jet-Journey\frontend\node_modules\eslint-config-react-app\base.js".