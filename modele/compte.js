
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
    }
  },
  { timestamps: true }
);

const compte = mongoose.model("Compte", Compte)
module.exports = compte

