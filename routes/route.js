const express = require("express");

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

router.get("/espaceChat",(req,res)=>{
        res.render("espaceChat");
})

module.exports = router;
