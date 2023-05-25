const imgComptes= require("../modele/imageCompte")

exports.compteUtilisateur = async(req,res)=>{
    try {
     console.log(req.body);
     const imgCte=  new imgComptes(req.body)
       await imgCte.save()}
    catch(e){
 console.log(e);
    }
 
 }

 exports.getCompte = async(req,res)=>{

    try{
        const read= await user.find({});
        res.render()
    }catch (e){
        res.status(400).send(e)
    }


 }