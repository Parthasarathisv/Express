//controller are collection of handler functions
let products=[{id:1,'name':'Note Book1','price':1000},
    {id:2,'name':'Note Book2','price':2000},
    {id:3,'name':'Note Book3','price':3000},
    {id:4,'name':'Note Book4','price':4000},
    {id:5,'name':'Note Book5','price':5000}
]
const getAllProducts=(req,res)=>{
    res.json(products)
}
const addProducts=(req,res)=>{
    let newProduct=req.body
    newProduct.id=products.length+1;
    products.push(newProduct)
    res.json(products)
}
const updateProduct=(req,res)=>{
    //data from client ?-update product -json object
    //update the price of the product with id=2 {}
    //data from the client with the body of the request
let updatedproduct=req.body //here we use the req.body beacuse the request of the data from the body of the request
products=products.map((p)=>p.id===updatedproduct.id?updatedproduct:p)

    res.json(products)
}
const deleteProduct=(req,res)=>{
    //data from client for the delete? id for the product
//http://localhost:8000/product/deleteproduct/1

let id=req.params.id //here we use the params to get the data from the client 
//we use params because the request of the data form the client in the url.
products=products.filter((p)=>p.id!==parseInt(id))
    res.json(products)
}

const getoneproduct=(req,res)=>{
    let id =req.params.id
    products=products.find((p)=>p.id===parseInt(id))
    res.json(products)
}

module.exports={getAllProducts,addProducts,updateProduct,deleteProduct,getoneproduct}

