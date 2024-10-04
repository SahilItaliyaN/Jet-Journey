const mongoose = require('mongoose');

const BusBookingSchema = new mongoose.Schema({
    bus_name: { type: String },              // Name of the bus (e.g., "Maya Express")
    departure_place: { type: String },       // Departure city (e.g., "Surat")
    departure_time: { type: String },        // Departure time (e.g., "22:40")
    arrival_city: { type: String },          // Arrival city (e.g., "Mumbai")
    arrival_time: { type: String },          // Arrival time (e.g., "03:25")
    duration: { type: String },              // Duration of the trip (e.g., "04 h 45 m")
    price: { type: Number },                  // Price of the ticket (e.g., 2100)
    trip_type: { type: String },             // Trip type (e.g., "Non-AC")
    bus_class: { type: String },              // Bus class (e.g., "Seater")
});

module.exports = mongoose.model("bus", BusBookingSchema);