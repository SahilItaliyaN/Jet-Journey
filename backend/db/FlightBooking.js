const mongoose = require('mongoose');

const FlightBookingSchema = new mongoose.Schema({
    airline_name: String,         // Airline name (e.g., Vistara)
    flight_number: String,        // Flight number (e.g., UK 521)
    departure_place: String,      // Departure city (e.g., Hyderabad)
    departure_time: Date,         // Departure time (e.g., 2024-10-07T14:30:00Z)
    arrival_city: String,         // Arrival city (e.g., Mumbai)
    arrival_time: Date,           // Arrival time (e.g., 2024-10-07T16:00:00Z)
    flight_duration: String,      // Duration of the flight (e.g., 01 h 30 m)
    price: Number,                // Price of the ticket (e.g., 3500)
    trip_type: String,            // Trip type (e.g., Round Trip)
    flight_class: String, 
});

module.exports = mongoose.model("flights",FlightBookingSchema);