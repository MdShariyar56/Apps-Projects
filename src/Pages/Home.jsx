import React from 'react';
import BannerImg from '../assets/hero.png';
import playStore from '../assets/fi_16076057.png';
import Appstore from '../assets/Group.png';

const Home = () => {
  return (
    <div>
 
      <div className="hero bg-base-300 pt-10 pb-0 mb-0 flex flex-col items-center text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>

          <div className="flex justify-center gap-4">
            <button className="btn bg-white hover:bg-primary hover:text-white mb-5 flex items-center gap-2">
              <img src={playStore} alt="Play Store" className="w-5 h-5" />
              Google Play
            </button>

            <button className="btn bg-white hover:bg-primary hover:text-white mb-5 flex items-center gap-2">
              <img src={Appstore} alt="App Store" className="w-5 h-5" />
              App Store
            </button>
          </div>
        </div>

       
        <div className="w-full flex justify-center mt-6">
          <img src={BannerImg} alt="Banner" className="max-w-[600px] w-full pb-0" />
        </div>
      </div>

      
      <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-primary-content py-8 mb-5 mt-0 text-center">
        <h1 className="text-4xl font-semibold ">Trusted by Millions, Built for You</h1>
        <div className='flex justify-center iteams-center gap-x-40 py-10'>
            <div>
                <p className='pb-2'>Total Downloads</p>
                <h1 className='text-5xl font-bold'>29.6M</h1>
                <p className='pb-2'>21% more than last month</p>
            </div>
            <div>
                <p className='pb-2'>Total Reviews</p>
                <h1 className='text-5xl font-bold'>906K</h1>
                <p className='pb-2'>46% more than last month</p>
            </div>
            <div>
                <p className='pb-2'>Active Apps</p>
                <h1 className='text-5xl font-bold'>132+</h1>
                <p className='pb-2'>31 more will Launch</p>
            </div>
        </div>
      </div>
      <div className='mt-8'>
        <div className='text-center'>
            <h1 className='text-4xl font-bold pb-2'>Trending Apps</h1>
           <p className='pb-2'>Explore All Trending Apps on the Market developed by us</p>
        </div>

      </div>
    </div>
  );
};

export default Home;
