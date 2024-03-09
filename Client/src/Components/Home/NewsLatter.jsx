import React from 'react'
import Content from '../Content/Content'

const NewsLatter = () => {
    const backgroundImageUrl = 'https://i.ibb.co/q10GBpx/Brand-of-the-day-Power-Nagad-Object-Removal.jpg';

  return (
    <Content>
    <div className="mt-16  object-cover rounded-md bg-gradient-to-r from-blue-700 via-transparent to-transparent relative w-full h-[500px]"
      style={{
        backgroundImage: `linear-gradient(41deg, #8080 0%, rgba(0, 95, 172, 0) 100%), url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
      }}>
      <div className="pt-24 md:pl-12 mx-10  space-y-3 text-white relative  h-full object-none">
        <h2 className="md:text-4xl text-2xl  font-semibold mb-4">Step into Style with Shoes Website</h2>
        <p className='text-base font-medium'>Stay on trend and in the loop with our latest arrivals, exclusive offers, and insider updates. <br /> Join our newsletter for a first look at the hottest shoe collections tailored just for you</p>
        <div className='md:w-[550px] bg-gray-200 flex py-1 rounded items-center'>
            <input placeholder='example@gmail.com' type="email" name="" className='bg-gray-200 w-full md:w-[550px] text-xl  px-3 outline-none text-black' id="" />
        <button className="bg-[#439DDF] text-black font-serif mx-2 text-base w-36 py-2  rounded">Call Now</button>
        </div>
      </div>
    </div>
  </Content>
  )
}

export default NewsLatter