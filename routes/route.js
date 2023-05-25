const express = require("express");

const controllers = require("../controllers/user");
const authentification=require("../middleware/authentification")
const controller=require("../controllers/compte")


const upload=require("../middleware/multer")

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/post/inscription",controllers.inscription)

router.post("/post/connexion",controllers.connexion)


router.post('/post/upload',controller.compteUtilisateur);
    

router.get("/espaceClient", (req, res) => {
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

router.get("/dashbordSuperAdmin",controllers.dashborSuperdAdmin);


router.get("/AcceuilSuperAdmin",controllers.dashbordAcceuil);

router.get("/dashbordAdmin",controllers.dashbordAdmin);

router.post("/user/logout",controllers.logout);

router.get("/AcceuilAdmin",controllers.dashbordAccueilAdmin)

router.get("/AdminCompt",controllers.AdminCompt)


module.exports = router;


