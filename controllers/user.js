const user = require("../modele/utilisateur");

exports.inscription = async (req, res) => {
  try {
    const login = await user.findEmail(req.body.email);
    console.log("login : ", login);

    if (!login) {
      const logEmail = new user(req.body);
      const authoKen= await logEmail.generateAuthTokenAndSave()
      
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
     const authoKen= await logcon.generateAuthTokenAndSave();
      console.log(logcon ,":salut");
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

exports.dashbordAcceuil = (req, res) => {
  res.render("dashbord/dashbordAcceuil");
};

exports.dashbordAdmin = (req, res) => {
  res.render("dashbord/dashbordAdmin");
};
exports.dashborSuperdAdmin = (req, res) => {
  res.render("dashbord/dashbordSuperAdmin");
};
exports.dashbordAdmin = (req, res) => {
  res.render("dashbord/superAdminCompt");
};
exports.AdminCompt = (req, res) => {
  res.render("dashbord/AdminCompt");
};
exports.dashbordAccueilAdmin = (req, res) => {
  res.render("dashbord/dashbordAcceuilAdmin");
};

exports.espaceClient = (req, res) => {
  res.render("espaceClient");
};

