const mongoose = require('mongoose');

const UserTicketSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the user
    ticket_type: { type: String, enum: ['flight', 'bus', 'hotel'], required: true }, // Type of ticket
    ticket_data: { type: Object, required: true } // Data related to the ticket (flight, bus, hotel)
});

module.exports = mongoose.model("UserTicket", UserTicketSchema);