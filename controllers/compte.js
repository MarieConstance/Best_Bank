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
