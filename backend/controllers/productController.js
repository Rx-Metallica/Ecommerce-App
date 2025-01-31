import {v2 as cloudinary} from 'cloudinary'
import produtModel from '../models/productModel.js'

// function for add product
// const addProduct = async (req,res)=>{
//     try {
//         const {name,description,price,category,subCategory,sizes,bestseller} = req.body
//         const image1 = req.files.image1 && req.files.image1[0]
//         const image2 = req.files.image2 && req.files.image2[0]
//         const image3 = req.files.image3 && req.files.image3[0]
//         const image4 = req.files.image4 && req.files.image4[0]

//         const images = [image1,image2,image3,image4].filter((item)=>item !== undefined)

//         let imagesUrl = await Promise.all(
//             images.map(async (item)=>{
//                 let result = await cloudinary.uploader.upload(item.path,{resource_type:'image'})
//                 return result.secure_url;
//             })
//         )

//         const productData = {
//             name,
//             description,
//             price: Number(price),
//             category,
//             subCategory,
//             sizes: JSON.parse(sizes),
//             bestseller: bestseller === 'true' ? true : false, 
//             image:imagesUrl,
//             date: Date.now()
//         }
//         console.log(productData)

//         const product = new produtModel(productData);
//         await product.save();

//         console.log(name,description,price,category,subCategory,sizes,bestseller);
//         console.log(imagesUrl)

//         res.json({success:true,message:'Product Added'})
//     } catch (error) {
//         console.log(error)
//         res.json({success:false,message:error.message})
//     }
// }

const addProduct = async (req, res) => {
    try {
      const { name, description, price, category, subCategory, sizes, bestseller } = req.body;
  
      // Extract images from request files
      const images = [req.files.image1, req.files.image2, req.files.image3, req.files.image4]
        .filter(Boolean)
        .map((fileArray) => fileArray[0]); // Use the first file if multiple are present
  
      // Upload images to Cloudinary in parallel
      const uploadPromises = images.map((item) =>
        cloudinary.uploader.upload(item.path, {
          resource_type: 'image',
          quality: 'auto',
          format: 'jpg', // Convert to JPG for better compression
        })
      );
  
      const uploadResults = await Promise.allSettled(uploadPromises);
  
      // Collect successful uploads
      const imagesUrl = uploadResults
        .filter((result) => result.status === 'fulfilled') // Only successful uploads
        .map((result) => result.value.secure_url);
  
      if (imagesUrl.length === 0) {
        return res.status(400).json({ success: false, message: 'Image upload failed.' });
      }
  
      // Prepare product data
      const productData = {
        name,
        description,
        price: Number(price),
        category,
        subCategory,
        sizes: JSON.parse(sizes),
        bestseller: bestseller === 'true',
        image: imagesUrl,
        date: Date.now(),
      };
  
      // Save the product in the database
      const product = new produtModel(productData);
      await product.save();
  
      res.json({ success: true, message: 'Product added successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: error.message });
    }
  };
  

const listProducts = async (req,res)=>{
    try {
        const product = await produtModel.find({})
        res.json({success:true,product})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

const removeProduct = async (req,res)=>{
    try {
        await produtModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"Product Removed"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

const singleProduct = async (req,res)=>{
    try {
        const {productId} = req.body
        const product = await produtModel.findById(productId)
        res.json({success:true,product})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

export {addProduct,listProducts,removeProduct,singleProduct};