const mongoose = require('mongoose');

const HotelBookingSchema = new mongoose.Schema({
    hotal_name:String,
    arrival_date:Date,
    arrival_time:Date,
    hotal_city:String,
    duration:String,
    address:String,
    price:Number,
    userid:String
})

module.exports = mongoose.model("hotals",HotelBookingSchema);