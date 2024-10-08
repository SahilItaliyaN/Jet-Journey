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
//     hotel_name: { type: String },           // Hotel name (e.g., "Super Townhouse Candolim")
//     checkin_time: { type: String },         // Check-in time (e.g., "14:00")
//     checkin_date: { type: String },         // Check-in date (e.g., "22nd Jan")
//     checkout_time: { type: String },        // Checkout time (e.g., "12:00")
//     checkout_date: { type: String },        // Checkout date (e.g., "24th Jan")
//     nights: { type: String },               // Duration (e.g., "2 Nights")
//     room_type: { type: String },            // Room type (e.g., "Single Room")
//     price: { type: Number },                // Price (e.g., 5000)
//     address: { type: String },              // Address of the hotel (e.g., "Candolim, Goa")
//     hotel_city: { type: String }            // City where the hotel is located (e.g., "Goa")
// });


module.exports = mongoose.model("hotels", HotelBookingSchema);