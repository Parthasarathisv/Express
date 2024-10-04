const Book=require("../models/book")
const saveBook=async(req,res)=>{
 try{
    let book =new Book(req.body)
    const saveBook=await book.save()//inset a document to a collection
    res.status(200).json(saveBook)
 }catch(err){
    console.log(err)
 }
}
const getAllBooks=async (req,res)=>{
    try{
        let books=await Book.find()
        res.json(books)
    }catch(err){
        console.log(err)
    }
}
const bookById=async (req,res)=>{
    let id=req.params.id
    try{
        let book=await Book.findById(id) //single document
        if(!book)
            res.send(`Book with ${id} does not exsit`)
        else
            res.json(book)
        
    }catch(error){
        console.log(error)
    }
}
const searchBooks=async(req,res)=>{
    let searchStr=req.params.substr
    const reqEx=new RegExp(searchStr,'i')//i case-insensitive
    let books=await Book.find({title:reqEx})
    res.json(books)
}
const deleteBook=async(req,res)=>{
    let id=req.params.id
    try{
     let book=await Book.findByIdAndDelete(id)
     console.log(book)
     if(!book)
        res.send(`Book ${id} does not exist`)
    else
    res.send('Delete sucessfully')
    }catch(err){
        console.log(err)
    }
}
const updatePrice=async (req,res)=>{
    let id=req.params.id
    let newPrice=req.params.newPrice
    try{
        let book=await Book.findByIdAndUpdate({_id:id},{$set:{price:newPrice}},{new:true})
        res.json(book)
    }catch(error){
        console.log(error)
    }
}
const updateBook=async(req,res)=>{
    let book=req.body
    try{
  let update=await Book.findByIdAndUpdate({_id:book._id},book,{new:true})
  res.json(update)
    } catch(error){
        console.log(error)
    }
}
const incrementPrice=async(req,res)=>{
    
    try{
let book=await Book.updateMany({},{$inc:{price:100}},{new:true})
res.json(book)
    }catch(error){
        console.log(error)
    }
}
const findBooksByGrader=async(req,res)=>{
    try{
   let books=await Book.find({price:{$gt:1000}})
   res.json(books)
    }catch(error){
         console.log(error)
    }
}

const addcart=async (req,res)=>{
    let id=req.params.id
    try{
        let book=await Book.findById(id) 
        if(!book)
            res.send(`Book with ${id} does not exsit`)
        else
            res.json(book)
        
    }catch(error){
        console.log(error)
    }
}

module.exports={saveBook,getAllBooks,bookById,searchBooks,deleteBook,updatePrice,updateBook,incrementPrice,findBooksByGrader,addcart}