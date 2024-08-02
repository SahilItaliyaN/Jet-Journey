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
})

app.listen(5000)