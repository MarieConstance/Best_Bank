const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const firstPage= require("./routes/route")

require("dotenv").config();
const app = express();

app.use(expressLayouts);

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use("/",firstPage)

app.set("view engine", "ejs");


app.listen(5000, () => {
  console.log("bienvenue nous somme connecter sur le port");
});
