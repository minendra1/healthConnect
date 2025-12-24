import jwt from 'jsonwebtoken'

//admin authentication
const authUser = async(req, res, next)=>{
    try {
        
        const {token} = req.headers
        if(!token){
            return res.json({success:false, message:'Not Authorised login again'})
        }
        const token_decode = jwt.verify(token, process.env.JWT_SECRET)
        console.log(token_decode);
        req.body = req.body || {};
        req.body.userId  = token_decode.id
        // console.log(req.body.userId);
        console.log(req.body)
        next()  // calling callback fuction if all ok

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

export default authUser