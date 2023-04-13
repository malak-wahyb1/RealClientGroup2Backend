import jwt from 'jsonwebtoken'

const verifyCustomer=(req,res,next)=>{

    const token=req.body.token||req.headers['token']
    if(!token){
        return res.status(403).send("A token is required ")
    }
    try{
        const decoded= jwt.verify(token,process.TOKEN_KEY)
        req.user = decoded;
    }catch(err){
        return res.status(401).send(err.message)
    }
    return next();
}
export default verifyCustomer