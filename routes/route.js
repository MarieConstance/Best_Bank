const express = require("express");
const multer =require("../middleware/multer")
const controllers = require("../controllers/user");
const compteControl = require("../controllers/compte")
const authentification=require("../middleware/authentification")
const controller=require("../controllers/compte")


const upload=require("../middleware/multer")

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/post/inscription",controllers.inscription)

router.post("/post/connexion",controllers.connexion)
router.post("/post/compte",compteControl.envoyer)
    

router.get("/espaceClient",authentification, (req, res) => {
  res.render("espaceClient");
});
router.get("/connexion", (req, res) => {
  res.render("connexion");
});
router.get("/inscription", (req, res) => {
  res.render("inscription");
});
router.get("/espaceClientSolde", (req, res) => {
  res.render("espaceClientSolde");
});

router.get("/espaceChat", (req, res) => {
  res.render("espaceChat");
});
router.get("/espaceDepot", (req, res) => {
  res.render("espaceDepot");
});

router.get("/listeAdmin",controllers.listeAdmin);


router.get("/AcceuilSuperAdmin",controllers.AcceuilSuperAdmin);

router.get("/dashbordAdmin",controllers.dashbordAdmin);

router.post("/user/logout",controllers.logout);

<<<<<<< HEAD
router.get("/AcceuilAdmin",controllers.dashbordAccueilAdmin)
=======
router.get("/AcceuilAdmin",controllers.AcceuilAdmin)
>>>>>>> 40c33298746a9d585b634d856f2cb42972511ca0

router.get("/AdminCompt",controllers.AdminCompt)

router.get("/superAdminCompt",controllers.superAdminCompt)

router.get("/updateCompt",controllers.updateCompt)

router.get("/connexionAdmins",controllers.connexionAdmins)



module.exports = router;



