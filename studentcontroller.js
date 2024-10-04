const Student=require("../models/student")

const saveStudent=async(req,res)=>{
 try{
    let student =new Student(req.body)
    const saveStudent=await student.save()//inset a document to a collection
    res.status(200).json(saveStudent)
 }catch(err){
    console.log(err)
 }
}
const getAllstudent=async (req,res)=>{
    try{
        let students=await Student.find()
        res.json(students)
    }catch(err){
        console.log(err)
    }
}
const studentById=async (req,res)=>{
    let id=req.params.id
    try{ 
let student=await Student.findById(id)
if(!student)
    res.send('invalid user')
else
res.json(student)
    }catch(error){

    }
}
const searchStudent=async (req,res)=>{
    let search=req.params.substr
    const reg=new RegExp(search,'i')
    try{
  let student=await Student.find({name:reg})
  if(!student)
    res.send('student does not exist')
else
res.json(student)
    }catch(error){
        console.log(error)
    }
}
const deleteStudent=async (req,res)=>{
    let id=req.params.id
    try{
let student=await Student.findByIdAndDelete(id)
if(!student)
    res.send('invalid id')
else
  res.send('Deleted sucessfully')
    }catch(err){
        console.log(err)
    }
}
const updateAge=async (req,res)=>{
    let id=req.params.id
    let newAge=req.params.newAge
    try{
let student=await Student.findByIdAndUpdate({_id:id},{$set:{age:newAge}},{new:true})
res.json(student)
    }catch(error){
        console.log(error)
    }
}
module.exports={saveStudent,getAllstudent,studentById,searchStudent,deleteStudent,updateAge}