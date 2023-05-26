const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const { Schema } = mongoose;

const administrateur = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    firstName:{
      type:String,
      required:true
    },
    email: {
      type: String,
      required: true,
    },
    telephone: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },

    role: {
        type:String,
        role:"admin"
    }
  },
  { timestamps: true }
);


  
  // fonction pour verifier l'email a l'inscription
  administrateur.statics.findEmail = async (email) => {
    const user = await cptDash.findOne({ email });
    if (user) throw new Error("erreur email  existe ");
    return user;
  };
  
  //fonction pour verifier l'email a la connexion
  
  administrateur.statics.findCon = async (email, password) => {
    const user = await cptDash.findOne({ email: email });
    console.log(user);
    if (!user) throw new error("erreur email n existe pas");
    const ispasswordvalid = await bcrypt.compare(password, user.password);
    if (!ispasswordvalid) throw new Error("erreur password n existe pas");
    return user;
  };
  
  //bcript utlisation de .pre pour crypter avant sauvegarde ('save')
  administrateur.pre("save", async function () {
    if (this.isModified("password"))
      this.password = await bcrypt.hash(this.password, 8);
  });
const cptDash=mongoose.model("AdminDash", administrateur);

module.exports = cptDash;