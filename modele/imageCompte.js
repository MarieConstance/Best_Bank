const mongoose = require("mongoose");

const { Schema } = mongoose;
const imgCompte = new Schema(
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
    email: {
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
    city: {
      type: String,
      required: true,
    },
    phone_number: {
      type: Number,
      required: true,
    },
    nationality: {
      type: String,
      required: true,
    },
    sex: {
      type: String,
      require: true,
    }
  },
  { timestamps: true }
);
const imgComptes = mongoose.model("Compte", imgCompte);

module.exports = imgComptes;
