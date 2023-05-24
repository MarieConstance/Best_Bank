const Compte = require('../modele/compte');
const fs = require("fs");



exports.envoyer = async (req, res, next)=>{
   
    console.log("yesssssss",req.body)
  try {
       
    const compte=  new Compte({...req.body})
    console.log(compte)
    await compte.save()
  } catch (error) {
    console.log(error);
  }

    
    // compte.save()
    //     .then((compte)=>res.status(201).json({compte}))
    //     .catch(error=>res.status(400).json({error}))
}