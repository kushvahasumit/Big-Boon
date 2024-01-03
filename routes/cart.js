const { Query } = require("mongoose");
const Cart = require("../models/Cart");
const { verifyTokenAuth, verifyTokenAdmin, verifyToken} = require("./verifytoken");

const router = require("express").Router()


// post product
router.post("/",verifyToken,async (req,res)=>{
    const newCart = new Cart(req.body)
    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedProduct)
        console.log(savedProduct)
    } catch (error) {
        res.status(500).json(error)
    }
})

// update
router.put("/:id",verifyTokenAuth,async  (req,res)=>{
     try {
        const updateCart = await Cart.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true});
        res.status(200).json(updateCart)
     } catch (error) {
        res.status(500).json(err)
     }

})

// Delete
router.delete("/:id",verifyTokenAuth,async(req,res)=>{
   try {
      await Cart.findByIdAndDelete(req.params.id)
      res.status(200).json("Cart has been deleted...")
   } catch (error) {
      res.status(500).json(error)
   }
})

//Get user Cart
router.get("/find/:userId",verifyTokenAuth,async(req,res)=>{
   try {
     const getUserCart = await Cart.findOne({userId:req.params.userId});
    res.status(200).json(getUserCart);
   } catch (error) {
      res.status(500).json(error)
   }
})

router.get("/",verifyTokenAdmin,async (req,res)=>{
   try {
    const getUserCart = await Cart.find();
    res.status(200).json(getUserCart);
   } catch (error) {
    res.status(500).json(error)
    
   }
})
 

module.exports = router;