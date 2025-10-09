import React, { useState, useEffect } from 'react';
import BannerImg from '../assets/hero.png';
import playStore from '../assets/fi_16076057.png';
import Appstore from '../assets/Group.png';
import AppsCard from '../Component/AppsCard';
import LoadingSpinner from '../Component/LoadingSpinner';

const Home = () => {
  const [apps, setApps] = useState(null); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('./appsData.json')
      .then(res => res.json())
      .then(data => {
        setApps(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoadingSpinner />; 
  }

  return (
    <div>
      <div className="hero bg-base-300 pt-10 pb-0 mb-0 flex flex-col items-center text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">Provident cupiditate voluptatem et in...</p>
          <div className="flex justify-center gap-4">
            <button
              className="btn bg-white hover:bg-primary hover:text-white mb-5 flex items-center gap-2"
              onClick={() => window.open('https://play.google.com/store/games?hl=en', '_blank')}
            >
              <img src={playStore} alt="Play Store" className="w-5 h-5" />
              Google Play
            </button>

            <button
              className="btn bg-white hover:bg-primary hover:text-white mb-5 flex items-center gap-2"
              onClick={() => window.open('https://www.apple.com/app-store/')}
            >
              <img src={Appstore} alt="App Store" className="w-5 h-5" />
              App Store
            </button>
          </div>
        </div>
        <div className="w-full flex justify-center mt-6">
          <img src={BannerImg} alt="Banner" className="max-w-[600px] w-full pb-0" />
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {apps.map(app => (
          <AppsCard key={app.id} app={app} />
        ))}
      </div>
    </div>
  );
};

export default Home;
