const express = require('express');
// const multer = require('multer');
require('./db/config');
const cors = require('cors');
const User = require('./db/User');
const Flight = require('./db/FlightBooking')
const Bus = require('./db/BusBooking')
const Hotel = require('./db/HotalBooking')
const UserTicket = require('./db/UserTickets');
const app = express();
app.use(express.json())
app.use(cors())


app.post("/user/ticket", async (req, res) => {
    try {
        const { user_id, ticket_type, ticket_data } = req.body; // Extract data from request body

        // Validate ticket type
        if (!['flight', 'bus', 'hotel'].includes(ticket_type)) {
            return res.status(400).send('Invalid ticket type');
        }

        // Create a new ticket
        const userTicket = new UserTicket({
            user_id,
            ticket_type,
            ticket_data
        });

        // Save the ticket to the database
        const result = await userTicket.save();
        res.status(201).json(result); // Send response with created ticket
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});
app.get("/user/tickets/:userId", async (req, res) => {
    try {
        const { userId } = req.params; // Extract userId from request parameters

        // Fetch all tickets associated with the user
        const userTickets = await UserTicket.find({ user_id: userId });

        if (userTickets.length === 0) {
            return res.status(404).send('No tickets found for this user'); // Handle case with no tickets
        }

        res.json(userTickets); // Send the found tickets as response
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error'); // Handle server error
    }
});


app.get("/searchflight/:key", async (req, res) => {
    try {
        // Search for flights that match the provided key
        const result = await Flight.find({
            "$or": [
                { departure_place: { $regex: req.params.key, $options: 'i' } },
                { arrival_city: { $regex: req.params.key, $options: 'i' } }
            ]
        });

        // If no flights are found, fetch all available flights
        if (result.length === 0) {
            const allFlights = await Flight.find(); // Fetch all flights
            return res.json(allFlights); // Return all flights if no match found
        }

        console.log(result);
        res.json(result); // Return the found flights
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


app.get("/searchbus/:key", async (req, res) => {
    try {
        // Search for buses that match the provided key
        const result = await Bus.find({
            "$or": [
                { departure_place: { $regex: req.params.key, $options: 'i' } },
                { arrival_city: { $regex: req.params.key, $options: 'i' } }
            ]
        });

        // If no buses are found, fetch all available buses
        if (result.length === 0) {
            const allBuses = await Bus.find(); // Fetch all buses
            return res.json(allBuses); // Return all buses if no match found
        }

        console.log(result);
        res.json(result); // Return the found buses
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


app.get("/searchhotel/:key", async (req, res) => {
    try {
        // Search for hotels that match the provided key
        const result = await Hotel.find({
            "$or": [
                { hotel_city: { $regex: req.params.key, $options: 'i' } }
            ]
        });

        // If no hotels are found, fetch all available hotels
        if (result.length === 0) {
            const allHotels = await Hotel.find(); // Fetch all hotels
            return res.json(allHotels); // Return all hotels if no match found
        }

        console.log(result);
        res.json(result); // Return the found hotels
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


app.post("/register",async(req,res)=>{
    let user = new User(req.body)
    let result = await user.save();
    result = result.toObject();
    delete result.password
    res.send(result);
})

app.post('/login', async (req,res)=>{
    const { username, password } = req.body;
    if (username && password) {
        try {
            const user = await User.findOne({ username, password }).select("-password");

            if (user) {
                res.send(user);
            } else {
                res.send({ result: "No User Found" });
            }
        } catch (error) {
            res.status(500).send({ result: "Server Error" });
        }
    } else {
        res.send({ result: "Email and Password Required" });
    }
})


// PRODUCT API
app.post('/add-product', async (req,res)=>{
    let product = new Product(req.body);
    let result = await product.save();
    res.send(result)
})

app.get('/products',async (req,res)=>{
    let products = await Product.find()
    if(products.length>0){
        res.send(products)
    }else{
        res.send({result:"No Products Found"})
    }
})

app.delete("/product/:id",async (req,res)=>{
    const result = await Product.deleteOne({_id:req.params.id})
    res.send(result)
});


// For get products details
app.get("/product/:id",async (req,res)=>{
    let result = await Product.findOne({_id:req.params.id})
    if(result){
        res.send(result)
    }else{
        res.send({result:"Data Not Found"})
    }
})

// For update products
app.put("/product/:id", async (req,res)=>{
    let result = await Product.updateOne(
        { _id : req.params.id },
        {
            $set: req.body
        }
    )
    res.send(result);
})

// app.get("/search/:key", async(req,res)=>{
//     let result = await Product.find({
//         "$or":[
//             {name:{$regex:req.params.key}},
//             {category:{$regex:req.params.key}},
//             {company:{$regex:req.params.key}}
//         ]
//     })
//     res.send(result);
// })


app.listen(5000);
console.log('Database Connected');
console.log('server Running');


