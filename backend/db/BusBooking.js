const mongoose = require('mongoose');

const BusBookingSchema = new mongoose.Schema({
    bus_name:String,
    departure_place:String,
    departure_Time:Date,
    arrival_city:String,
    arrival_time:Date,
    flight_duration:String,
    price:Number,
    userid:String
})

module.exports = mongoose.model("bus",BusBookingSchema);