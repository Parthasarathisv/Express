const express=require('express')
const {saveStudent, getAllstudent, studentById, searchStudent, deleteStudent, updateAge}=require('../controller/studentcontroller')
const studentRouter=express.Router()

studentRouter.post('/',saveStudent)

studentRouter.get('/',getAllstudent)
studentRouter.get('/:id',studentById)
studentRouter.get('/search/:substr',searchStudent)
studentRouter.delete('/:id',deleteStudent)
studentRouter.put('/:id/:newAge',updateAge)
module.exports=studentRouter