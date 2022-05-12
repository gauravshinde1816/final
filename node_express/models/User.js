const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    name:{
        type: String
    },
    password:{
        type:String
    },
    address:{
        type:String
    },
    phoneNo:{
        type: String
    },
    age:{
        type:Number
    }

})


module.exports = mongoose.model("User" , userSchema)