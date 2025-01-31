import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'About'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate maxime nam perferendis neque architecto voluptatum impedit magnam expedita quis aperiam, placeat tempore sapiente corporis, obcaecati atque sed mollitia, consectetur error?</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae perspiciatis ipsam ut fuga consectetur repellendus, ab quos molestiae! Asperiores neque impedit non harum repellendus provident dicta voluptatum expedita eligendi id?</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, fuga enim optio a asperiores quas nulla dignissimos, voluptatem vero doloremque praesentium molestiae aperiam eum, sequi necessitatibus autem ex atque ab. </p>
          </div>
      </div>

      <div className='text-4xl py-4'>
        <Title text1={'WHy'} text2={'Choose US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit dolore totam perspiciatis ab, consequatur ex autem ratione eligendi. Necessitatibus, ut odit distinctio voluptatibus molestiae officia perferendis earum commodi delectus libero!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit dolore totam perspiciatis ab, consequatur ex autem ratione eligendi. Necessitatibus, ut odit distinctio voluptatibus molestiae officia perferendis earum commodi delectus libero!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit dolore totam perspiciatis ab, consequatur ex autem ratione eligendi. Necessitatibus, ut odit distinctio voluptatibus molestiae officia perferendis earum commodi delectus libero!</p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
    
  )
}

export default About