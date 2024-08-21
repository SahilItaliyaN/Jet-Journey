const mongoose = require('mongoose');

const HotelBookingSchema = new mongoose.Schema({
    hotal_name:String,
    arrival_time:Date,
    hotal_city:String,
    duration:String,
    address:String,
    price:Number,
})

module.exports = mongoose.model("hotal",HotelBookingSchema);