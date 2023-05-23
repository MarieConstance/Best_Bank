const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const validator = require('validator');
const jwt=require("jsonwebtoken")

const { Schema } = mongoose;

const utilisateur = new Schema({
    nom: {
        type: String,
        required: true,
        trim:true
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: validator.isEmail,
            message: 'Le champ email doit être une adresse email valide.',
          },
    },
    number:{
        type: Number,
        required: true,
        validate: {
            validator: validator.isNumeric,
            message: 'Le champ number doit être un nombre.',
          },
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: value => validator.isStrongPassword(value, { minLength: 8 }),
            message: 'Le champ password doit être un mot de passe fort avec une longueur minimale de 8 caractères.',
          },

    },
    authokens:[{
        authoken:{
            type: String,
            required:true
        }
    }]
},{timestamps: true}
);

// suprimer le motdepasse de lutilisateur et le le thoken afin de ne pas le rendre accessible

// utilisateur.methods.toJSON()=function(){
//  const user=this.toObject()

//  delete user.authokens;
//  delete user.password;
//  return user
// }

//methode pour faire l'authentification et sauvegarder

utilisateur.methods.generateAuthTokenAndSave=async function(){
  const authoken=jwt.sign({ _id:this._id.tostring() }, 'foo');

    this.authokens.push({authoken})
    await this.save()
    return authoken

}




// fonction pour verifier l'email a l'inscription
utilisateur.statics.findEmail = async (email) => {

    const User =await  user.findOne({email})
    if (User) throw new Error('erreur email  existe ')
    return User;
}

//fonction pour verifier l'email a la connexion

utilisateur.statics.findCon= async (email,password)=>{
    const User = await user.findOne({email:email})
    console.log(User);
    if(!User) throw new error ('erreur email n existe pas')
    const ispasswordvalid = await bcrypt.compare(password, User.password)
    if (!ispasswordvalid) throw new Error('erreur password n existe pas')
    return User;
}



//bcript utlisation de .pre pour crypter avant sauvegarde ('save')
utilisateur.pre('save', async function () {
    if (this.isModified('password')) this.password = await bcrypt.hash(this.password, 8)
})



const user = mongoose.model("Users", utilisateur);

module.exports = user
      