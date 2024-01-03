const { Query } = require("mongoose");
const Product = require("../models/Product");
const { verifyTokenAuth, verifyTokenAdmin} = require("./verifytoken");

const router = require("express").Router()


// post product
router.post("/newp",verifyTokenAdmin,async (req,res)=>{
    const newProduct = new Product(req.body)
    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct)
        console.log(savedProduct)
    } catch (error) {
        res.status(500).json(error)
    }
})

// update
router.put("/:id",verifyTokenAdmin,async  (req,res)=>{
     try {
        const updateProduct = await Product.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true});
        res.status(200).json(updateProduct)
     } catch (error) {
        res.status(500).json(err)
     }

})

// Delete
router.delete("/:id",verifyTokenAdmin,async(req,res)=>{
   try {
      await Product.findByIdAndDelete(req.params.id)
      res.status(200).json("Product has been deleted...")
   } catch (error) {
      res.status(500).json(error)
   }
})

//Get Product
router.get("/find/:id",async(req,res)=>{
   try {
     const getUser = await Product.findById(req.params.id)
    res.status(200).json(getUser);
   } catch (error) {
      res.status(500).json(error)
   }
})

//Get All Products
router.get("/",async(req,res)=>{
   const queryNew = req.query.new;
   const queryCategory = req.query.category;

   try {
    let product;

    if (queryNew) {
        product = await Product.find.sort({createdAt : -1}).limit(5);

    }else if(queryCategory){
        product = await Product.find({
            categories : {
                $in : [queryCategory],
            },
        });

    }else{
        product= await Product.find();

    }

     
    res.status(200).json(product);
   } catch (error) {
      res.status(500).json(error)
   }
})

 

module.exports = router;