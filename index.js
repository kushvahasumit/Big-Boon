const { config } = require("dotenv");
const express = require("express")
const app = express()
const mongoose = require("mongoose");
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")
const stripeRoute = require("./routes/stripe")
const cors = require("cors")


config()
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connected with DB")
}).catch((err)=>{
    console.log(err)
});


app.use(express.json())
app.use(cors())
app.use("/api/user" , userRoute)
app.use("/api/auth",authRoute)
app.use("/api/product",productRoute)
app.use("/api/cart",cartRoute)
app.use("/api/order",orderRoute)
app.use("/api/checkout",stripeRoute)


app.listen(process.env.PORT || 5001, ()=>{
    console.log(`Backend Server is Running on ${process.env.PORT}`)
})