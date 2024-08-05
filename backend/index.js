const express = require('express');
require('./db/config');
const cors = require('cors');
const User = require('./db/User');
const Product = require('./db/Product')
const app = express();
app.use(express.json())
app.use(cors())

app.post("/register",async(req,res)=>{
    let user = new User(req.body)
    let result = await user.save();
    result = result.toObject();
    delete result.password
    res.send(result);
})

app.post('/login', async (req,res)=>{
    const { email, password } = req.body;
    if (email && password) {
        try {
            const user = await User.findOne({ email, password }).select("-password");

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