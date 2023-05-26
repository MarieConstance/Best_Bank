const express = require("express");
const multer =require("../middleware/multer")
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

router.post("/post/admin",controller.inscriptionDasbord )

router.post('/post/upload',controller.compteUtilisateur);
router.post('/post/connexionAdmins',controller.conDashbord);
    

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

router.get("/listeAdmin",controllers.listeAdmin);


router.get("/AcceuilSuperAdmin",controllers.AcceuilSuperAdmin);

router.get("/dashbordAdmin",controllers.dashbordAdmin);

router.post("/user/logout",controllers.logout);

router.get("/AcceuilAdmin",controllers.AcceuilAdmin)

router.get("/AdminCompt",controllers.AdminCompt)

router.get("/superAdminCompt",controllers.superAdminCompt)

router.get("/updateCompt",controllers.updateCompt)

router.get("/updateAdmin",controllers.updateAdmin)

router.get("/connexionAdmins",controllers.connexionAdmins)



router.get('/updateComptes/:id', controller.getUpdateUserCompte);
router.get('/update-userCompte/:id', controller.postUpdateUserCompte);
router.get("/delete/:id",controller.deleteUtilisateurs )
        
////route Administrateur
router.get('/updateAdmin/:id', controller.getUpdateAdmin);
router.post('/update-userAdmin/:id', controller.postUpdateAdmin);




module.exports = router;




