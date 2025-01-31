// add product to usercart

import userModel from "../models/userModel.js"

const addToCart = async (req,res) =>{
    try {
        const {userId,itemId,size } = req.body
        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData

        if(cartData[itemId]){
            if(cartData[itemId[size]]){
                cartData[itemId][size] += 1;
            }else{
                cartData[itemId][size] = 1;
            }
        }else{
            cartData[itemId] = {}
            cartData[itemId][size] = 1;
        }
        await userModel.findByIdAndUpdate(userId,{cartData})
        res.json({success:true,message:"Added to Cart"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error})
    }
}

const updateCart = async (req,res) =>{
    try {
        
        const {userId,itemId, size, quantity} = req.body
        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData

        cartData[itemId][size] = quantity
        await userModel.findByIdAndUpdate(userId,{cartData})
        res.json({success:true,message:"Updated Cart"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error})
    }
}

const getUserCart = async (req,res) =>{
    try {
        const {userId} = req.body
        let userData = await userModel.findById(userId)
        // res.json({success:true, cartData})
        res.json({success:true, cartData:userData.cartData})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error})
    }
}

export {addToCart,getUserCart,updateCart}