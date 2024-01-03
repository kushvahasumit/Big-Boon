const { Query } = require("mongoose");
const Order = require("../models/Order");
const {  verifyTokenAdmin, verifyToken} = require("./verifytoken");

const router = require("express").Router()


// post product
router.post("/",verifyToken,async (req,res)=>{
    const newOrder = new Order(req.body)
    try {
        const savedOrder = await newOrder.save();
        console.log(savedOrder)
        res.status(200).json(savedOrder)  
    } catch (error) {
        res.status(500).json(error)
    }
})

// update
router.put("/:id",verifyTokenAdmin,async  (req,res)=>{
     try {
        const updateOrder = await Order.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true});
        res.status(200).json(updateOrder)
     } catch (error) {
        res.status(500).json(err)
     }

})

// Delete
router.delete("/:id",verifyTokenAdmin,async(req,res)=>{
   try {
      await Order.findByIdAndDelete(req.params.id)
      res.status(200).json("Order has been deleted...")
   } catch (error) {
      res.status(500).json(error)
   }
})

//Get user Order
router.get("/find/:userId",verifyTokenAdmin,async(req,res)=>{
   try {
     const getUserOrder = await Order.findOne({userId:req.params.userId});
    res.status(200).json(getUserOrder);
   } catch (error) {
      res.status(500).json(error)
   }
})

// get all Order
router.get("/",verifyTokenAdmin,async (req,res)=>{
   try {
    const getUserOrder = await Order.find();
    res.status(200).json(getUserOrder);
   } catch (error) {
    res.status(500).json(error)
    
   }
})

// Get monthly Income
router.get("/income",verifyTokenAdmin,async (req,res)=>{
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth()-1))
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth()-1))

    try {
        const income = await Order.aggregate([
            {$match : {createdAt : {$gte : previousMonth}}},
            {$project :{
                month:{$month : "$createdAt"},
                sales:"$amount",
            }},
            {$group :{
               _id:"$month",
               total:{$sum :"$sales"}
            }},
        ]);

        res.status(200).json(income)
    } catch (error) {
    res.status(500).json(error)
        
    }


})

module.exports = router;