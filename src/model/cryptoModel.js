const mongoose = require("mongoose")

const cryptoSchema = new mongoose.Schema({

    symbol :{
        type:String,
       Unique:true,
      
    },
    name:{
        type:String,
       Unique:true,
    
    },
    marketCapUsd:{
        type: String,
       
    },
    priceUsd:{
        type: String,
    
    }

 




}, { timestamps: true });

module.exports= mongoose.model('Crypto',cryptoSchema)

 