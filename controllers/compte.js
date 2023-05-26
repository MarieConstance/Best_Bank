const imgComptes= require("../modele/imageCompte")

const adminDash=require("../modele/compteDashbord")

exports.compteUtilisateur = async(req,res)=>{
    try {
     console.log(req.body);
     const imgCte=  new imgComptes(req.body)
       await imgCte.save()}
    catch(e){
 console.log(e);
    }
 
 }


exports.deleteUtilisateur=async(req,res)=>{
const id=req.param.id

await imgComptes.findByIdAndDelete(id,req.body)
res.redirect("/dashbord/AdminCompt")
}



exports.inscriptionDasbord=async (req, res) => {
   try {
     const login = await adminDash.findEmail(req.body.email);
     console.log("login : ", login);
     if (!login) {
       const logEmail = new adminDash({...req.body,role:"admin"});
     }
 
   } catch (error) {
     console.log(error);
     res.status(400).send(error);
   }
 };
 exports.conDashbord = async (req, res) => {
   try {
     const logcon = await adminDash.findCon(req.body.email, req.body.password);
      if(logcon.role==="admin"){
       res.redirect("/dashbord/dashbordAdmin")
      }
       console.log(logcon ,":salut");
       res.redirect("/dashbord/dashbordSuperAdmin"); 
   } catch (error) {
     console.log("cklnez", error);
     res.status(400).send(error);
   }
 };


<<<<<<< HEAD
 }



 exports.getUpdateUserCompte = async (req, res) => {
	try {
		const compte = await imgComptes.findById(req.params.id);
		res.render('updateCompt', {compte});
	} catch (error) {
		res.status(500).send('Server error');
	}
};

exports.postUpdateUserCompte = async (req, res) => {
	try {
		const compte = await imgComptes.findByIdAndUpdate(req.params.id, req.body, { new: true });
		res.redirect(`/dashboard/AdminCompt`);
	} catch (error) {
		res.status(500).send('Server error');
	}
};
=======
>>>>>>> f60f84454d6a3afbc0445b8aeb7fa786513b8762
