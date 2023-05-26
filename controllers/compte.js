const imgComptes = require("../modele/imageCompte");

const adminDash = require("../modele/compteDashbord");

exports.compteUtilisateur = async (req, res) => {
  try {
    console.log(req.body);
    const imgCte = new imgComptes(req.body);
    await imgCte.save();
  } catch (e) {
    console.log(e);
  }
};

exports.deleteUtilisateur = async (req, res) => {
  const id = req.param.id;

  await imgComptes.findByIdAndDelete(id, req.body);
  res.redirect("/dashbord/AdminCompt");
};

exports.inscriptionDasbord = async (req, res) => {
  try {
    const login = await adminDash.findEmail(req.body.email);
    console.log("login : ", login);
    if (!login) {
      const logEmail = new adminDash({ ...req.body, role: "admin" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
exports.conDashbord = async (req, res) => {
  try {
    const logcon = await adminDash.findCon(req.body.email, req.body.password);
    if (logcon.role === "admin") {
      res.redirect("/dashbord/AcceuilAdmin");
    }
    console.log(logcon, ":salut");
    res.redirect("/dashbord/AcceuilSuperAdmin");
  } catch (error) {
    console.log("cklnez", error);
    res.status(400).send(error);
  }
};

exports.deleteUtilisateur = async (req, res) => {
  const id = req.param.id;

  await adminDash.findByIdAndDelete(id, req.body);
  res.redirect("/dashbord/AdminCompt");
};

 