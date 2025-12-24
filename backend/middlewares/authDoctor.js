import jwt from 'jsonwebtoken'

//doctor authentication
const authDoctor = async(req, res, next)=>{
    try {
        
        const {dtoken} = req.headers
        // console.log(req)
        if(!dtoken){
            return res.json({success:false, message:'Not Authorised login again'})
        }
        const token_decode = jwt.verify(dtoken, process.env.JWT_SECRET)
        console.log(token_decode);
        req.body = req.body || {};
        req.body.docId  = token_decode.id
        // console.log(req.body.userId);
        console.log(req.body)
        next()  // calling callback fuction if all ok

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

export default authDoctor