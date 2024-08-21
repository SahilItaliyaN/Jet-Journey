import React, { useEffect, useState } from 'react'

const FlightList = () => {

    const [flights,setFlights] = useState();

    const getflights = async () =>{
        let result = await fetch('http://localhost:5000/flights')
        result = await result.json();
        setFlights(result)
    }

    useEffect(()=>{
        getflights();
    },[])
    return (
        <div>
            <h2>Flight Booking List</h2>
            <ul>
                <li>No.</li>
                <li>Flight Name</li>
                <li>Airline Name</li>
                <li>Flight Number</li>
                <li>Departure Place</li>
                <li>Departure Time</li>
                <li>Arrival City</li>
                <li>Arrival Time</li>
                <li>Flight Duration</li>
                <li>Price ($)</li>
            </ul>
            {flights.length > 0 ? (
                flights.map((flight, index) => (
                    <ul key={flight.flight_number}>
                        <li>{index + 1}</li>
                        <li>{flight.flight_name}</li>
                        <li>{flight.airline_name}</li>
                        <li>{flight.flight_number}</li>
                        <li>{flight.departure_place}</li>
                        <li>{new Date(flight.departure_Time).toLocaleString()}</li>
                        <li>{flight.arrival_city}</li>
                        <li>{new Date(flight.arrival_time).toLocaleString()}</li>
                        <li>{flight.flight_duration}</li>
                        <li>{flight.price.toFixed(2)}</li>
                    </ul>
                ))
            ) : (
                <h1>No Results Found</h1>
            )}
        </div>
    )
}

export default FlightList