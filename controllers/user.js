const user = require("../modele/utilisateur");

const imgComptes = require("../modele/imageCompte");

const comptDasbord = require("../modele/compteDashbord");

exports.inscription = async (req, res) => {
  try {
    const login = await user.findEmail(req.body.email);
    // console.log("login : ", login);

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
      return authoken.authoken !== req.authoken;
    });
  } catch (e) {
    console.log(e);
  }
  await req.user.save();
  res.send("salut");
};

// compte admin

exports.AcceuilSuperAdmin = async (req, res) => {
  const admin = await comptDasbord.find({});
  const utilisateurCompte = await imgComptes.find({});
  const admine = admin.length;
  const utilisateurComptes = utilisateurCompte.length;

  res.render("dashbord/AcceuilSuperAdmin", { admine, utilisateurComptes });
};

exports.dashbordAdmin = (req, res) => {
  res.render("dashbord/dashbordAdmin");
};
exports.listeAdmin = async (req, res) => {
  const utilisateur = await comptDasbord.find({});

  res.render("dashbord/listeAdmin", { utilisateur });
};
exports.superAdminCompt = async (req, res) => {
  const compte = await imgComptes.find({});

  res.render("dashbord/superAdminCompt", { compte });
};
exports.AdminCompt = async (req, res) => {
  const compte = await imgComptes.find({});
  console.log(compte);

  res.render("dashbord/AdminCompt", { compte });
};
exports.AcceuilAdmin = (req, res) => {
  res.render("dashbord/AcceuilAdmin");
};

exports.updateCompt = (req, res) => {
  res.render("dashbord/updateCompt");
};

exports.updateAdmin = (req, res) => {
  res.render("dashbord/updateAdmin");
};

exports.connexionAdmins = (req, res) => {
  res.render("dashbord/connexionAdmins");
};

exports.espaceClient = (req, res) => {
  res.render("espaceClient");
};


