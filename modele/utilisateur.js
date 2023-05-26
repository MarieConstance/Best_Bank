const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const { Schema } = mongoose;

const utilisateur = new Schema(
  {
    nom: {
      type: String,
      required: true,
      trim: true,
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
    authokens: [
      {
        authoken: {
          type: String,
          required: true,
        }
      }
    ]
  },
  { timestamps: true }
);
// suprimer le motdepasse de lutilisateur et le le thoken afin de ne pas le rendre accessible

// utilisateur.methods.toJSON()=function(){
//  const user=this.toObject()

//  delete user.authokens;
//  delete user.password;
//  return user
// }

//methode pour faire l'authentification et sauvegarder

utilisateur.methods.generateAuthTokenAndSave = async function () {
  const authoken = jwt.sign({ _id: this._id.toString() }, "foo");
  this.authokens.push({ authoken });
  await this.save();
  return authoken;
};

// fonction pour verifier l'email a l'inscription
utilisateur.statics.findEmail = async (email) => {
  const user = await User.findOne({ email });
  if (user) throw new Error("erreur email  existe ");
  return user;
};

//fonction pour verifier l'email a la connexion

utilisateur.statics.findCon = async (email, password) => {
  const user = await User.findOne({ email: email });
  console.log(user);
  if (!user) throw new error("erreur email n existe pas");
  const ispasswordvalid = await bcrypt.compare(password, user.password);
  if (!ispasswordvalid) throw new Error("erreur password n existe pas");
  return user;
};

//bcript utlisation de .pre pour crypter avant sauvegarde ('save')
utilisateur.pre("save", async function () {
  if (this.isModified("password"))
    this.password = await bcrypt.hash(this.password, 8);
});

const User = mongoose.model("User", utilisateur);

module.exports = User;
