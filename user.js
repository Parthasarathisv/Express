const mongoose=require('mongoose')
const UserSchema=new mongoose.Schema({
   'email':{type:String,required:true,unique:true},
   'password':{type:String,required:true},
   'firstname':{type:String,required:true},
   'lastname':{type:String},
   'role':{type:String,required:true,enum:['admin','user']}
})
module.exports=mongoose.model('User',UserSchema,'userdetails')
//here the userdetails is the collection name(data base) we are mapping the user to userdetails collection