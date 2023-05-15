const express = require("express");
const cors = require("cors");

const firstPage = require("./routes/route");

require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", firstPage);

app.set("view engine", "ejs");

app.listen(5000, () => {
  console.log("bienvenue nous somme connecter sur le port");
});
