const jwt = require("jsonwebtoken")

const verifyToken = (req,res,next)=>{
    const authHeader = req.headers.token
    if (authHeader) {
        // const token =authHeader.split(" ")[1]
        jwt.verify(authHeader,process.env.SEC_JWT,(err,user)=>{
            if (err)res.status(403).json("Invalid Token")
            req.user = user;
            next();
        })
    }else{
        return res.status(401).json("you are not authenticated user!!")
    }
}

const verifyTokenAuth = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if (req.user.id === req.params.id || req.user.isAdmin) {
          next();
        }else{
            res.status(403).json("You are not allowed to do this!!")
            
        }
    })
}

const verifyTokenAdmin = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if (req.user.isAdmin) {
          next();
        }else{
            res.status(403).json("You are not allowed to do this!!")
            
        }
    })
}

module.exports = {verifyToken,verifyTokenAuth,verifyTokenAdmin}