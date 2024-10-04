const express=require('express')
const {saveBook,getAllBooks, bookById, searchBooks, deleteBook, updatePrice, updateBook, incrementPrice, findBooksByGrader, addcart}=require('../controller/bookscontroller')
const authMiddleware = require('../middleware/authMiddleware')
const bookRouter=express.Router()

bookRouter.post('/',saveBook)
//http://localhost:8000/books/
bookRouter.get('/',getAllBooks)
bookRouter.get('/price',findBooksByGrader)
bookRouter.get('/:id',bookById)
bookRouter.get('/search/:sunstr',searchBooks)
bookRouter.delete('/:id',deleteBook)
bookRouter.put('/:id/:newPrice',authMiddleware,updatePrice)
bookRouter.put('/update',authMiddleware,updateBook)
bookRouter.put('/increment',incrementPrice)
bookRouter.get('/addcart/:id',addcart)

module.exports=bookRouter