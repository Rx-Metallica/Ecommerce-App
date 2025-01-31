import jwt from 'jsonwebtoken';
import 'dotenv/config';

const adminAuth = async (req,res,next) => {
    try {
        const {token} = req.headers;
        console.log('Token Received:', token);
        if(!token){
            return res.json({success:false,message:"Not Authorized login again1"})
        }
        const token_Decode = jwt.verify(token,process.env.JWT_SECRET)
        if(token_Decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
            return res.json({success:false,message:"Not Authorized login again2"})
        }
        next()
    } catch (error) {
        console.log(error)
        res.json({sucess:false,message:error.message})
    }
}

export default adminAuth;