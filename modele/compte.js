const mongoose = require ("mongoose");

const compteSchema = mongoose.Schema({
    name: {type: String, required: true},
    first_name:{type: String, required : true},
    birth_date:{type: String, required : true},
    job:{type: String, required : true},
    email:{type: String, required : true},
    city:{type: String, required : true},
    country:{type: String, required : true},
    nationality:{type: String, required : true},
    sex:{type: String, required : true},
    phone_number:{type: Number, required : true},
    imageUrl:{type: String, required : true}   
});

module.exports = mongoose.model("Compte", compteSchema)