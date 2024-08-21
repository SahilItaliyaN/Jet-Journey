const mongoose = require('mongoose');

const FlightBookingSchema = new mongoose.Schema({
    flight_name:String,
    airline_name:String,
    flight_number:String,
    departure_place:String,
    departure_Time:Date,
    arrival_city:String,
    arrival_time:Date,
    flight_duration:String,
    price:Number
});

module.exports = mongoose.model("flights",FlightBookingSchema);

// db/flight.js
// const mongoose = require('mongoose');

// const flightSchema = new mongoose.Schema({
//     name: String,
//     category: String,
//     company: String,
//     price:Number,
//     imagePath: String  // Field to store the file path
// });

// module.exports = mongoose.model('flights', flightSchema);