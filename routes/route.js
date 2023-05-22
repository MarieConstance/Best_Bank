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
router.get("/espaceClientSolde",(req,res)=>{
  res.render("espaceClientSolde")
})

router.get("/espaceChat",(req,res)=>{
        res.render("espaceChat");
})
router.get("/espaceDepot",(req,res)=>{
  res.render("espaceDepot");
})


router.get("/dashbordAcceuil",(req,res)=>{
        res.render("dashbord/dashbordAcceuil");
})

router.post("/user/logout",(req,res)=>{
  try{
    req.user.authokens=req.user.authokens.filter((autthoken)=>{
      return authoken.authoken != req.authoken  
    })
  }catch(e){
    console.log()
  }
  await req.user.save()
  res.send()

})

module.exports = router;
