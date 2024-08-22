import React, { useEffect, useState } from 'react'

const FlightList = () => {

    const [flights,setFlights] = useState([]);

    const getflights = async () =>{
        let result = await fetch('http://localhost:5000/flightslist');
        result = await result.json();
        setFlights(result);
    }

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
    useEffect(()=>{
        getflights();
    },[])
    return (
        <div>
            <h2>Flight Booking List</h2>
            {flights.length > 0 ? (
                <table style={style}>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Flight Name</th>
                            <th>Airline Name</th>
                            <th>Flight Number</th>
                            <th>Departure Place</th>
                            <th>Departure Time</th>
                            <th>Arrival City</th>
                            <th>Arrival Time</th>
                            <th>Flight Duration</th>
                            <th>Price ($)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {flights.map((flight, index) => (
                            <tr key={flight.flight_number} style={style2}>
                                <td>{index + 1}</td>
                                <td>{flight.flight_name}</td>
                                <td>{flight.airline_name}</td>
                                <td>{flight.flight_number}</td>
                                <td>{flight.departure_place}</td>
                                <td>{new Date(flight.departure_Time).toLocaleString()}</td>
                                <td>{flight.arrival_city}</td>
                                <td>{new Date(flight.arrival_time).toLocaleString()}</td>
                                <td>{flight.flight_duration}</td>
                                <td>{flight.price.toFixed(2)}</td>
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

export default FlightList