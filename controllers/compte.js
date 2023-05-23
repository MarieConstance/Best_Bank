const Compte = require('../modele/compte');
const fs = require("fs");



exports.envoyer = (req, res, next)=>{
    const compte = new Compte({...req.body,imageUrl: `${req.protocol}://${req.get("host")}/images/${req.filename}`})

    
    compte.save()
        .then(()=>res.status(201).json({message:"Objet crée"}))
        .catch(error=>res.status(400).json({error}))
}