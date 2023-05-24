const express = require("express");
const cors = require("cors");
const firstPage = require("./routes/route");

require("dotenv").config();
const connectDB  =require('./config/db')
const app = express();
<<<<<<< HEAD
/////////////////////////////////////
mongoose.connect('mongodb+srv://koffAnz:0778827674@cluster0.2njrjif.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
  /////////////////////////////
=======
app.use(express.json())

connectDB()

>>>>>>> dedbb76c274db6e89fa74e3a7befb5c5629dd9ae
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
