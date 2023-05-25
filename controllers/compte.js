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


exports.deleteAdminCompte=async(req,res)=>{
const id=req.param.id

await imgComptes.findByIdAndDelete(id,req.body)
res.redirect("/dashbord/AdminCompt")
}
