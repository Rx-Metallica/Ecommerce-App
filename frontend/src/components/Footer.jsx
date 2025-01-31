import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr__1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img className='mb-5 w-32' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui adipisci consectetur esse totam minus doloribus impedit necessitatibus officiis soluta pariatur.
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap1 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>Get In Touch</p>
                <ul className='flex flex-col gap1 text-gray-600'>
                    <li>+91 1345678910</li>
                    <li>Forever@email.com</li>
                </ul>
            </div>

        </div>
        <div>
            <hr />
            <p className='font-semibold py-5 text-sm text-center'>Made with ❤️ by Aditya Mote </p>
        </div>
    </div>
  )
}

export default Footer