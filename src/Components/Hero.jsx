import React from 'react'
import GroupIcon from '../assets/groupicon.png';
// import Image from '../assets/image1.png';


import { HiOutlineArrowNarrowRight } from 'react-icons/hi';


const Hero = () => {
    return (
        <div className='mt-8 ml-[rem] px-[2rem] '>
            <div className="grid md:grid-cols-2 background:  mx-auto">
                <div>
                    <h3 className="text-[#050580] text-[3rem] ">Genuiness comes</h3>
                    <h3 className="text-[#050580] text-[3rem]">in <span className="text-[#FF24BD]"> different shades</span></h3>
                    <p className="text-[#000000]">If you are tired of being comfortable, If you lack confidence in your future as <br /> a techie. If you are done lagging behind others... stop worrying inside <br /> TechYOUnity. Your geuniness will grow by connecting with growth minded, <br /> passionate people. It’s your community. <span className="text-[#050580] font-semibold">Are you ready for growth?</span></p>
                    <div className="flex bg-[#050580]  text-white py-3 mt-[2rem] border rounded-r-3xl rounded-bl-3xl max-w-[300px]">
                        <button className="ml-6">Join the community</button>
                        <HiOutlineArrowNarrowRight size={25} className="mt-2 ml-[4rem]" />
                    </div>
                </div>
                <div>
                    <img className=" h-[30] mx-auto py-[2rem] w-[16rem]" src={GroupIcon} alt="/" />
                </div>
            </div>
            <div className='text-center mt-12'>
                <h4 className="text-[#050580] font-semibold text-xl">About Us</h4>
                <h2 className="text-[#050580] font-bold text-3xl">Out Differences</h2>
                <h3 className="text-[#FF24BD] font-bold text-3xl">make us stronger</h3>
                <p className="py-3">The Notion of Tech being the easy way out has put many people in situations <br /> beyond their control as the gap between starting out in tech and becoming <br /> successful in Tech is very wide. In between this gap comes a lot of confusion, <br /> sacrifices, misconceptions, obstacles, principles to be learned, fears, perseverance, <br /> setbacks, unlearning, learning and relearning, etc.</p>
                <p className="py-3"> But don’t panic, techYOUnity has been designed to bridge the gap. We are set up <br />to be a pillar that you can lean on as you embark on the journey to be an <br />EXCELLENT TECHIE. Join our vehicle, we would drive you through the potholes <br />and roadblocks to take you to the land of EXCELLENT TECHIES.</p>
                <div>
                    {/* <img className="h-[30]  mx-auto w-[40rem]" src={Image} alt="" /> */}
                </div>
            </div>
            
            {/* <OurStory /> */}
            
        </div>
    )
}

export default Hero