
const mongoose = require ("mongoose");

// const compteSchema = mongoose.Schema({
//     name: {type: String, required: true},
//     first_name:{type: String, required : true},
//     birth_date:{type: String, required : true},
//     job:{type: String, required : true},
//     email:{type: String, required : true},
//     city:{type: String, required : true},
//     country:{type: String, required : true},
//     nationality:{type: String, required : true},
//     sex:{type: String, required : true},
//     phone_number:{type: Number, required : true},
//     // imageUrl:{type: String, required : true}   
// });
// const { Schema } = mongoose;
const { Schema } = mongoose;
const Compte = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    first_name: {
      type: String,
      required: true,
    },
    birth_date: {
      type: Number,
      required: true,
    },
    job: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    phone_number: {
      type: String,
      required: true,
    },
    nationality: {
      type: String,
      required: true,
    },
    numeroCompte: {
      type: String,
      default: getCompte(name,first_name)
    }
  },
  
  { timestamps: true }
);
let number = 101

function getCompte(a,b){
  let t = a.split("").splice(0,3).join("");
  let p = b.split("").splice(0,1).join("");
  number++;
  return `${t}${p}${number}`

}
const compte = mongoose.model("Compte", Compte)
module.exports = compte

