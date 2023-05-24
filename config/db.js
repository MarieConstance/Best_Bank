
const mongoose = require('mongoose');

const connectDB= async()=>{
    try {
        await mongoose.connect('mongodb+srv://Best_bank:Best_bank012345@bank.v5c01yr.mongodb.net/');
        console.log('Connected to MongoDB');
      } catch (error) {
       console.log('pas connecter')
      }
    
}

module.exports= connectDB



