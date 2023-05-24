const express = require("express");

const controllers = require("../controllers/user");
const authentification=require("../middleware/authentification")
const imgComptes= require("../modele/imageCompte")

const upload=require("../middleware/multer")

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/post/inscription",controllers.inscription)

router.post("/post/connexion",controllers.connexion)


router.post('/post/upload',upload.single('file'),async(req,res)=>{
   try {
    console.log(req.body);
    const imgCte=  new imgComptes(req.body,req.file)
      await imgCte.save()}
   catch(e){
console.log(e);
   }

});
    

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


router.get("/dashbordAcceuil",controllers.dashbordAcceuil);

router.get("/dashbordAdmin",controllers.dashbordAdmin);

router.post("/user/logout",controllers.logout);

router.get("/dashbordAcceuilAdmin",controllers.dashbordAccueilAdmin)

router.get("/AdminCompt",controllers.AdminCompt)


module.exports = router;


