import React from 'react';
import Image2 from '../assets/image2.png';
import Image3 from '../assets/image3.png';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const OurEvent = () => {
  return (
    <div>
         <div className='py-[rem] justify-betwee ml-[rem]'>
                <div className="grid md:grid-cols-2 ml-2">
                    <img className='h-[23rem] mx-auto' src={Image2} alt="" />
                    <div className="ml-6 mt-10">
                        <h4 className='text-black font-semibold text-[20px] mt-2'>Our Events</h4>
                        <h2 className='text-[#050580] font-bold text-3xl'>Connect with</h2>
                        <h2 className='text-[#050580] font-bold text-3xl'>people like you</h2>
                        <h4 className='text-[16px] py-2'>It is not new knowledge, that techies find it difficult to <br />connect with people from other indusries because of the <br />nature of their Job. Well, this is the perfect opportunity to <br />connect with people like you</h4>
                        <div className="flex bg-[#050580]  text-white py-3 mt-[2rem] border rounded-r-3xl rounded-bl-3xl max-w-[300px]">
                            <button className="ml-6">Join the community</button>
                            <HiOutlineArrowNarrowRight size={25} className="mt-2 ml-[4rem]" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-[9rem] justify-between '>
                <div className="grid md:grid-cols-2 ml-2">
                    <div className="ml-6 mt-10">
                        <h4 className='text-black font-semibold text-2xl py-2'>No Stories here,</h4>
                        <h2 className='text-[#FF24DB] py-2 font-bold text-xl'>Only real life stories</h2>
                        <h2 className='text-[#050580] font-semibold py-3'>Our Events.</h2>
                        <h4 className='text-[12px] py-2'>We know you cannot wait for our next event, and we also<br />cannot wait to have you</h4>
                        <div className="flex bg-[#050580]  text-white py-3 mt-[1rem] border rounded-r-3xl rounded-bl-3xl max-w-[300px]">
                            <button className="ml-6">Join the community</button>
                            <HiOutlineArrowNarrowRight size={25} className="mt-2 ml-[4rem]" />
                        </div>
                    </div>
                    <img className='h-[18rem] mx-auto ml-[-0.2rem] mt-[3rem]' src={Image3} alt="" />
                </div>
            </div>
    </div>
  )
}

export default OurEvent