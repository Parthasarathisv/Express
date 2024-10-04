const express=require('express')

const resourcenotfounrrouter=express.Router()

resourcenotfounrrouter.all('/',(req,res)=>{
    res.statusCode=404
    res.send(`The resourse is  not found...`)
})
module.exports={resourcenotfounrrouter}