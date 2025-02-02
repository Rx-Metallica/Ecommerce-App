import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import RealtedProduct from '../components/RealtedProduct'

const Product = () => {

  const {productId} = useParams()
  const {products,currency,addToCart} = useContext(ShopContext)
  const [productdata, setProuctData] = useState(false)
  const [image,SetImage] = useState('')
  const [size , setSize] = useState('')

  const fetchProductData = async ()=>{
    products.map((item)=>{
      if(item._id === productId){
        setProuctData(item)
        SetImage(item.image[0])
        return null;
      }
    })
  }
  
  useEffect(() => {
    fetchProductData()
  },[productId,products])

  return productdata ?(
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product Data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* Product Image */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productdata.image.map((item,index)=>(
                <img onClick={()=>SetImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>
        {/* productInfo */}
        <div className='flex-1'>
            <h1 className='font-medim text-2xl mt-2'>{productdata.name}</h1>
            <div className='flex items-center gap-1 mt-2'>
                <img src={assets.star_icon} alt="" className='w-3 5' />
                <img src={assets.star_icon} alt="" className='w-3 5' />
                <img src={assets.star_icon} alt="" className='w-3 5' />
                <img src={assets.star_icon} alt="" className='w-3 5' />
                <img src={assets.star_dull_icon} alt="" className='w-3 5' />
                <p className='pl-2'>{112}</p>
            </div>
            <p className='mt-5 text-3xl font-medium'>{currency}{productdata.price}</p>
            <p className='mt-5 text-gray-500 md:w-4/5'>{productdata.description}</p>
            <div className='flex flex-col gap-4 my-8'>
              <p>Select Size</p>
              <div className='flex gap-2'>
                  {productdata.sizes.map((item,index)=>(
                    <button onClick={()=> setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`} key={index}>{item}</button>
                  ))}
              </div>
            </div>
            <button onClick={()=>addToCart(productdata._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>Add To Cart</button>
            <hr className='mt-8 sm:w/5' />
            <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                  <p>100% Original Product.</p>
                  <p>Cash on Delivery is Available on this Product.</p>
                  <p>Easy return and exchange policy in 7 days.</p>
            </div>
        </div>
      </div>

      {/* Description & Review Section */}
      <div className='mt-20'>
          <div className='flex'>
                <b className='border px-5 py-3 text-sm'>Description</b>
                <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
          </div>
          <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem itaque enim ut ab quibusdam, maxime molestiae corrupti illo pariatur, odit est sint dicta reiciendis corporis. Laudantium possimus illum dicta expedita.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quis perspiciatis, dolorem velit esse provident cupiditate maiores ipsa enim ducimus, voluptatem possimus fugiat error deserunt! Ut, illo rerum. Nam, dolores?</p>
          </div>
      </div>

      {/* Display Related Products */}
      <RealtedProduct category={productdata.category} subCategory={productdata.subCategory}/>

    </div>
  ): <div className='opactity-0'> </div>
}

export default Product