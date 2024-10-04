const express=require('express')
const { getAllProducts, addProducts, updateProduct, deleteProduct,getoneproduct } = require('../controller/productcontroller')
const productrouter=express.Router()


productrouter.get('/getallproduct',getAllProducts)//read all the product 
 
productrouter.post('/addproduct',addProducts)

productrouter.put('/updateproduct',updateProduct)
productrouter.delete('/deleteproduct/:id',deleteProduct)

productrouter.get('/getoneproduct/:id',getoneproduct)

module.exports={productrouter}