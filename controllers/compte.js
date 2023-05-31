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

// exports.inscriptionDasbord = async (req, res) => {
//   try {
//     const login = await adminDash.findEmail(req.body.email);
//     console.log("login : ", login);
//     if (!login) {
//       const logEmail = new adminDash({ ...req.body, role: "admin" });
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(400).send(error);
//   }
// };
// exports.conDashbord = async (req, res) => {
//   try {
//     const logcon = await adminDash.findCon(req.body.email, req.body.password);
//     if (logcon.role === "admin") {
//       res.redirect("/dashbord/AcceuilAdmin");
//     }
//     console.log(logcon, ":salut");
//     res.redirect("/dashbord/AcceuilSuperAdmin");
//   } catch (error) {
//     console.log("cklnez", error);
//     res.status(400).send(error);
//   }
// };

exports.deleteUtilisateurs = async (req, res) => {
  const id = req.params.id;
  console.log('id',id);

  await adminDash.findByIdAndDelete(id, req.body);
  res.redirect("/dashbord/AdminCompt");
};

exports.deleteUtilisateur = async (req, res) => {
  const id = req.params.id;

  await imgComptes.findByIdAndDelete(id, req.body);
  res.redirect("/dashbord/AdminCompt");
};

exports.getUpdateUserCompte = async (req, res) => {
  try {
    const compte = await imgComptes.findById(req.params.id);
    res.render("dashbord/updateCompt", { compte });
  } catch (error) {
    res.status(500).send("Server error");
  }
};

exports.postUpdateUserCompte = async (req, res) => {
  try {
    const compte = await imgComptes.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.redirect("/dashbord/listeAdmin");
  } catch (error) {
    res.status(500).send("Server error");
  }
};

/////////////////////ADMINISTRATEUR/////////////

exports.inscriptionDasbord = async (req, res) => {
  try {
    console.log(req.body.email);
    const login = await adminDash.findEmail(req.body.email);
    console.log("login : ", login);
    if (!login) {
      const logEmail = new adminDash({ ...req.body, role: "admin" });
      await logEmail.save();
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
      res.redirect("/AcceuilAdmin");
    }
    console.log(logcon, ":salut");
    res.redirect("/AcceuilSuperAdmin");
  } catch (error) {
    console.log("cklnez", error);
    res.redirect("/connexionAdmins");
  }
};

exports.getUpdateAdmin = async (req, res) => {
  try {
    const compteAdmin = await adminDash.findById(req.params.id);
    res.render("updateAdmin", { compteAdmin });
  } catch (error) {
    res.status(500).send("Server error");
  }
};

exports.postUpdateAdmin = async (req, res) => {
  try {
    const compteAdmin = await adminDash.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.redirect(`/dashboard/AdminCompt`);
  } catch (error) {
    res.status(500).send("Server error");
  }
};
