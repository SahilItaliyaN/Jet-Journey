import React, { useEffect, useState } from 'react';
import '../css/usertickets.css'; // Add your new styles here
import useAuthStore from './store/authstore';

const UserTickets = () => {
    const [tickets, setTickets] = useState([]);
    const authuser = useAuthStore(state => state.user); // Get the logged-in user's details

    const fetchUserTickets = async () => {
        try {
            let response = await fetch(`http://localhost:5000/user/tickets/${authuser._id}`); // Fetch user tickets
            if (!response.ok) {
                const errorText = await response.text();
                console.error('Error fetching tickets:', errorText);
                alert('Unable to fetch tickets');
                return;
            }

            const data = await response.json();
            setTickets(data); // Set the tickets state with the fetched data
        } catch (error) {
            console.error('Fetch error:', error);
            setTickets([]); // Reset tickets on error
        }
    };

    useEffect(() => {
        fetchUserTickets(); // Fetch tickets on component mount
    }, [authuser]);

    const renderTable = (ticketType) => {
        const filteredTickets = tickets.filter(ticket => ticket.ticket_type === ticketType);
        return (
            <table className="ticket-table">
                <thead>
                    <tr>
                        <th>{ticketType.charAt(0).toUpperCase() + ticketType.slice(1)} Tickets</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredTickets.length > 0 ? (
                        filteredTickets.map((ticket) => (
                            <tr key={ticket._id}>
                                <td>
                                    {ticket.ticket_data[ticketType + '_name'] || ticket.ticket_data.flight_number}
                                </td>
                                <td>
                                    {ticketType === 'bus' && (
                                        <>
                                            Departure: {ticket.ticket_data.departure_place} at {ticket.ticket_data.departure_time}<br />
                                            Arrival: {ticket.ticket_data.arrival_city} at {ticket.ticket_data.arrival_time}<br />
                                            Duration: {ticket.ticket_data.duration}<br />
                                            Price: ₹{ticket.ticket_data.price.toFixed(2)}
                                        </>
                                    )}
                                    {ticketType === 'flight' && (
                                        <>
                                            Airline: {ticket.ticket_data.airline_name}<br />
                                            Departure: {ticket.ticket_data.departure_place} at {ticket.ticket_data.departure_time}<br />
                                            Arrival: {ticket.ticket_data.arrival_city} at {ticket.ticket_data.arrival_time}<br />
                                            Duration: {ticket.ticket_data.flight_duration}<br />
                                            Price: ₹{ticket.ticket_data.price.toFixed(2)}
                                        </>
                                    )}
                                    {ticketType === 'hotel' && (
                                        <>
                                            Check-in: {ticket.ticket_data.checkin_date} at {ticket.ticket_data.checkin_time}<br />
                                            Check-out: {ticket.ticket_data.checkout_date} at {ticket.ticket_data.checkout_time}<br />
                                            Nights: {ticket.ticket_data.nights}<br />
                                            Price: ₹{ticket.ticket_data.price.toFixed(2)}
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="2" style={{ textAlign: 'center' }}>No Tickets Found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    };

    return (
        <div>
            <h1>My Tickets</h1>
            <div className="ticket-container">
                {renderTable('bus')}
                {renderTable('flight')}
                {renderTable('hotel')}
            </div>
        </div>
    );
};

export default UserTickets;
