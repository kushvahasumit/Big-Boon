const { Query } = require("mongoose");
const User = require("../models/User");
const { verifyTokenAuth, verifyTokenAdmin} = require("./verifytoken");

const router = require("express").Router()

// update
router.put("/:id",verifyTokenAuth,async  (req,res)=>{
     if (req.body.password) {
        req.body.password= CryptoJS.AES.encrypt(
            req.body.password,
            process.env.SEC_PASS
          ).toString();
     }

     try {
        const updateUser = await User.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true});
        res.status(200).json(updateUser)
     } catch (error) {
        res.status(500).json(err)
     }

})

// Delete
router.delete("/:id",verifyTokenAuth,async(req,res)=>{
   try {
      await User.findByIdAndDelete(req.params.id)
      res.status(200).json("User has been deleted...")
   } catch (error) {
      res.status(500).json(error)
   }
})

//Get User
router.get("/find/:id",verifyTokenAdmin,async(req,res)=>{
   try {
     const getUser = await User.findById(req.params.id)
     
    const { password, ...others } = getUser._doc;

    res.status(200).json(others);
   } catch (error) {
      res.status(500).json(error)
   }
})

//Get All Users
router.get("/",verifyTokenAdmin,async(req,res)=>{
   const query = req.query.new;
   try {
     const getAllUser = Query ? await User.find().sort({_id:-1}).limit(5) : await User.find()
    res.status(200).json(getAllUser);
   } catch (error) {
      res.status(500).json(error)
   }
})

// Get user STAT
router.get("/stats",verifyTokenAdmin,async (req,res)=>{
      const date = new Date();
      const lastYear = new Date(date.setFullYear(date.getFullYear() -1));

      try {
         const data = await User.aggregate([
            {$match : {createdAt : {$gte : lastYear}}},
            {$project :{month:{$month : "$createdAt"}}},
            {$group :{
               _id:"$month",
               total:{$sum :1}
            }},
         ])

         res.status(200).json(data)
      } catch (error) {
      res.status(500).json(error)
         
      }
} )

module.exports = router;