const express=require('express')

const router=express.Router();


router.get("",(req,res)=>{

   res.render("index")
})
router.get("/espaceClient",(req,res)=>{
        res.render("espaceClient")
})





module.exports= router
