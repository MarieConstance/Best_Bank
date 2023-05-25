const user = require("../modele/utilisateur");
const adminDash=require("../modele/compteDashbord")
const imgComptes= require("../modele/imageCompte")

exports.inscription = async (req, res) => {
  try {
    const login = await user.findEmail(req.body.email);
    console.log("login : ", login);
    
    if (!login) {
      const logEmail = new user(req.body);
      const authoKen = await logEmail.generateAuthTokenAndSave();

      res.redirect("/connexion");
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
exports.inscriptionDasbord=async (req, res) => {
  try {
    const admin = await adminDash.findEmail(req.body.email);
    console.log("login : ", login);

    if (!login) {
      const logEmail = new adminDash({...req.body,role:"admin"});
      const authoKen= await logEmail.generateAuthTokenAndSave()
      
      res.redirect("/connexion");
    }

  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
exports.conDashbord = async (req, res) => {
  try {
    const logcon = await adminDash.findCon(req.body.email, req.body.password);
     const authoKen= await logcon.generateAuthTokenAndSave();
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

exports.connexion = async (req, res) => {
  try {
    const logcon = await user.findCon(req.body.email, req.body.password);
    const authoKen = await logcon.generateAuthTokenAndSave();
    console.log(logcon, ":salut");
    res.redirect("/espaceClient");
  } catch (error) {
    console.log("cklnez", error);
    res.status(400).send(error);
  }
};

exports.logout = async (req, res) => {
  try {
    req.user.authokens = req.user.authokens.filter((authoken) => {
      return authoken.authoken != req.authoken;
    });
  } catch (e) {
    console.log(e);
  }
  await req.user.save();
  res.send("salut");
};

<<<<<<< HEAD

exports.AdminCompt = (req, res) => {
 
  res.render("dashbord/AdminCompt");
};


exports.espaceClient = (req, res) => {
  res.render("espaceClient");
};



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

//  dashbord  admin et superAdmin

exports.dashbordAccueilAdmin = (req, res) => {
  res.render("dashbord/dashbordAcceuilAdmin");
};
exports.dashbordAdmin = (req, res) => {
  res.render("dashbord/superAdminCompt");
};
exports.dashbordAcceuil = (req, res) => {
  res.render("dashbord/dashbordAcceuil");
=======
exports.AcceuilSuperAdmin = (req, res) => {
  res.render("dashbord/AcceuilSuperAdmin");
>>>>>>> 40c33298746a9d585b634d856f2cb42972511ca0
};

exports.dashbordAdmin = (req, res) => {
  res.render("dashbord/dashbordAdmin");
};
<<<<<<< HEAD
exports.dashborSuperdAdmin = (req, res) => {
  res.render("dashbord/dashbordSuperAdmin");
};
=======
exports.listeAdmin = (req, res) => {
  res.render("dashbord/listeAdmin");
};
exports.superAdminCompt = (req, res) => {
  res.render("dashbord/superAdminCompt");
};
exports.AdminCompt = (req, res) => {
  res.render("dashbord/AdminCompt");
};
exports.AcceuilAdmin = (req, res) => {
  res.render("dashbord/AcceuilAdmin");
};

exports.updateCompt = (req, res) => {
  res.render("dashbord/updateCompt");
};

exports.connexionAdmins = (req, res) => {
  res.render("dashbord/connexionAdmins");
};

exports.espaceClient = (req, res) => {
  res.render("espaceClient");
};

>>>>>>> 40c33298746a9d585b634d856f2cb42972511ca0
