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