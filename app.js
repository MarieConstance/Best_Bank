const express = require("express");
const cors = require("cors");
const firstPage = require("./routes/route");

require("dotenv").config();
const connectDB  =require('./config/db')
const app = express();



app.use(express.json())

connectDB()

app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", firstPage);



app.use((req,res)=>{

  res.render("page404")
})

app.set("view engine", "ejs");

app.listen(5000, () => {
  console.log("bienvenue nous somme connecter sur le port");
});
