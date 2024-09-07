import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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

    const style = {
        color: 'blue',
        backgroundColor: 'lightgray',
        padding: '10px',
        borderRadius: '5px',
        textAlign: 'center',
    };
    const style2 = {
        border: '2px solid gray',  
        padding: '5px',
    };

    return (
        <div>
            <h2>Hotel Booking List</h2>
            {hotels.length > 0 ? (
                <table style={style}>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Hotel Name</th>
                            <th>Arrival Time</th>
                            <th>Hotel City</th>
                            <th>Duration</th>
                            <th>Address</th>
                            <th>Price ($)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hotels.map((hotel, index) => (
                            <tr key={hotel._id} style={style2}>
                                <td>{index + 1}</td>
                                <td>{hotel.hotal_name}</td> {/* Consider renaming to hotel_name if possible */}
                                <td>{new Date(hotel.arrival_time).toLocaleString()}</td>
                                <td>{hotel.hotal_city}</td> {/* Consider renaming to hotel_city if possible */}
                                <td>{hotel.duration}</td>
                                <td>{hotel.address}</td>
                                <td>{hotel.price.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <h1>No Results Found</h1>
            )}
        </div>
    );
}

export default SearchH;
