const express = require("express");
const cors = require("cors");
const firstPage = require("./routes/route");
const path = require("path")

require("dotenv").config();
const connectDB  =require('./config/db')
const app = express();


app.use(express.json())

connectDB()



app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", firstPage);
app.use('/uploads',express.static('./uploads'))


app.use((req,res)=>{

  res.render("page404")
})

app.set("view engine", "ejs");

app.listen(5000, () => {
  console.log("bienvenue nous somme connecter sur le port");
});
