const jwt=require('jsonwebtoken');
const authMiddleware=async (req,res,next)=>{
    const authHeader=req.headers.authorization;
    //if ther is no token 
    //there is a toekn, but it does not starts with bearer

    console.log(authHeader)
    if(!authHeader || !authHeader.startsWith('Bearer')){
        //next (new customApiError (not Authorized ',401)//go to errorhandler
        res.status(401).send('not authorized')
    }
    //take the playload which contains the data,

    try{
        const token=authHeader.split(' ')[1];
        console.log(token)
        const decoded=jwt.verify(token,process.env.JSON_SECRETKEY);
        //fetch the user details
        const {email,firstname,role,_id}=decoded;
        console.log(decoded)
        req.user={email,firstname,role,_id}
        next()
    }catch(err){
        console.log(err)
        throw Error('Not authroized')
    }
}
module.exports=authMiddleware