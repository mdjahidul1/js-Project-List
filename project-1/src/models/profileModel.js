const mongoose=require('mongoose')
const  dataSchema=mongoose.Schema({
    FirstName:{type:String},
    LastName:{type:String},
    EmailAddress:{type:String},
    MobileNumber:{type:String},
    City:{type:String},
    UserName:{type:String,unique:true},
    Password:{type:String}

},{versionKey:false});
const profileModel= mongoose.model('profiles',dataSchema);

module.exports=profileModel

