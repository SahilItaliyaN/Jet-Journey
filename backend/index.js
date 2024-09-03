const express = require('express');
const multer = require('multer');
require('./db/config');
const cors = require('cors');
const path = require('path');
const User = require('./db/User');
const Product = require('./db/Product');
const Flight = require('./db/FlightBooking')
const app = express();
app.use(express.json())
app.use(cors())



// const Upload = multer({dest: 'upload/'});

// const upload = multer({
//     storage:multer.diskStorage({
//         destination:function(req,file,cb)
//         {
//             cb(null,'public/uploads')
//         },
//         filename:function(req,file,cb)
//         {
//             cb(null,file.fieldname + '-'+Date.now() + path.extname(file.originalname))
//         }
//     })
// }).single("file")

// app.use(express.static(path.join(__dirname, 'public')));


// app.post('/upload',upload,(req,res)=>{
//     res.send("file upload")
//     upload(req, res, async (err) => {
//         if (err) {
//             return res.status(500).send({ success: false, message: err.message });
//         }
//         if (!req.file) {
//             return res.status(400).send({ success: false, message: 'No file received' });
//         }
//         const host = req.get('host');
//         const filePath = req.protocol + "://" + host + 'public/uploads/' + req.file.filename;
//         res.send({ success: true, filePath: filePath });

//         const flightid = req.body.flightid; // Example way to pass the product ID

//         if (!flightid) {
//             return res.status(400).send({ success: false, message: 'Product ID is required' });
//         }

//         try {
//             // Update the product with the new file path
//             let flight =new Flight(req.body)
//             let result = await flight.save();
//             result = result.toObject();
//             res.send(result)

//             let result2 = await Flight.findByIdAndUpdate(
//                 flightid,
//                 { imagePath: filePath },
//                 { new: true } // Return the updated document
//             );
            
//             if (!result2) {
//                 return res.status(404).send({ success: false, message: 'Product not found' });
//             }

//             res.send({ success: true, filePath: filePath, product: result });
//         } catch (error) {
//             res.status(500).send({ success: false, message: 'Server Error' });
//         }
//     });
// });

app.post("/flight",async (req,res)=>{
    let flight =new Flight(req.body)
    let result = await flight.save();
    result = result.toObject();
    res.send(result)
})

app.get('/flightslist',async (req,res)=>{
    let flights = await Flight.find();
    if(flights){
        res.send(flights)
    }else{
        res.send({result:"No flights Found"})
    }
})

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

app.get("/search/:key", async(req,res)=>{
    let result = await Product.find({
        "$or":[
            {name:{$regex:req.params.key}},
            {category:{$regex:req.params.key}},
            {company:{$regex:req.params.key}}
        ]
    })
    res.send(result);
})


app.listen(5000)