const express = require("express");

const controllers = require("../controllers/user");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
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

router.get("/dashbordAcceuil",controllers.dashbordAcceuil);


router.get("/dashbordAdmin",controllers.dashbordAdmin);

router.post("/user/logout",controllers.logout);

module.exports = router;
