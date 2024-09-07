import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const SearchB = () => {

    const [bus, setBus] = useState([]);
    const { key } = useParams(); 

    const getbus = async () => {
        try {
            let response = await fetch(`http://localhost:5000/searchbus/${key}`);
            console.log(response)
            
            // Check if the response status is not OK
            if (!response.ok) {
                const errorText = await response.text(); // Get the error text from the response
                console.error('Error fetching data:', errorText); // Log error text
                alert('Network response was not ok');
                return;
            }
            console.log(response)
            // Parse JSON response
            const data = await response.json();
            console.log(data)
            setBus(data);
        } catch (error) {
            // Log the error and show an alert
            console.error('Fetch error:', error);
            setBus([]);
        }
    }

    useEffect(() => {
        getbus();
    }, []);

    const style = {
        color: 'blue',
        backgroundColor: 'lightgray',
        padding: '10px',
        borderRadius: '5px',
        textAlign: 'center',
    };
    const style2 = {
        border : '2px solid gery',  
        padding:'5px'
    }

    return (
        <div>
            <h2>Bus Booking List</h2>
            {bus.length > 0 ? (
                <table style={style}>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Bus Name</th>
                            <th>Departure Place</th>
                            <th>Departure Time</th>
                            <th>Arrival City</th>
                            <th>Arrival Time</th>
                            <th>Travel Duration</th>
                            <th>Price ($)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bus.map((busItem, index) => (
                            <tr key={busItem._id} style={style2}>
                                <td>{index + 1}</td>
                                <td>{busItem.bus_name}</td>
                                <td>{busItem.departure_place}</td>
                                <td>{new Date(busItem.departure_Time).toLocaleString()}</td>
                                <td>{busItem.arrival_city}</td>
                                <td>{new Date(busItem.arrival_time).toLocaleString()}</td>
                                <td>{busItem.flight_duration}</td> {/* Consider renaming this to travel_duration if appropriate */}
                                <td>{busItem.price.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <h1>No Results Found</h1>
            )}
        </div>
    )
}

export default SearchB