import { ArrowDownToLine, Star, ThumbsUp } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import RatingChart from '../Component/RatingChart';

const AppsDetails = () => {
  const app = useLoaderData();
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const installedApps = JSON.parse(localStorage.getItem('installedApps')) || [];
    if (installedApps.find(a => a.id === app.id)) setInstalled(true);
  }, [app.id]);

  const handleInstall = () => {
    const installedApps = JSON.parse(localStorage.getItem('installedApps')) || [];
    if (!installedApps.find(a => a.id === app.id)) {
      installedApps.push(app);
      localStorage.setItem('installedApps', JSON.stringify(installedApps));
      setInstalled(true);
      toast.success(`${app.title} installed successfully!`, { duration: 2500 });
    }
  };

  return (
   <div className=''> 
         <div className=" flex justify-start items-start bg-base-200 px-5 py-10 container mx-auto ">
      <div className="flex flex-col lg:flex-row gap-8 p-8 max-w-4xl w-full">
        <div className="flex justify-center items-center w-full lg:w-1/2">
          <img
            src={app.image}
            alt={app.title}
            className="rounded-xl w-[150px] h-[150px] object-cover shadow-sm"
          />
        </div>
        <div className="flex flex-col justify-center gap-4 w-full lg:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800">{app.title}</h1>
          <p className="text-gray-600 text-2xl">
            Developed by <span className="font-semibold text-sm text-blue-600">{app.companyName}</span>
          </p>
          <div className='flex gap-x-6'>
            <div>
              <ArrowDownToLine className='text-[#00D390]' />
              <p>Downloads</p>
              <h1 className='text-xl font-bold'>{app.downloads}</h1>
            </div>
            <div>
              <Star className='text-[#FF8811]' />
              <p>Average Ratings</p>
              <h1 className='text-xl font-bold'>{app.ratingAvg}</h1>
            </div>
            <div>
              <ThumbsUp className='text-blue-600' />
              <p>Total Reviews</p>
              <h1 className='text-xl font-bold'>{app.reviews}</h1>  
            </div>
          </div>
              <button
  onClick={handleInstall}
  disabled={installed}
  className={`w-fit mt-3 text-white px-4 py-2 rounded 
    ${installed 
      ? 'bg-green-500 cursor-not-allowed'   
      : 'bg-green-500 hover:bg-green-600'}   
  `}
>
  {installed ? 'Installed' : `Install Now (${app.size})`}
</button>



        </div>
      </div>
      
      <Toaster position="top-right" />
       
    </div>
    
     <div className="lg:w-1/2 mt-10 lg:mt-0 flex-1  container mx-auto ">
          <RatingChart ratings={app.ratings} />
        </div>
        <div className='mt-2 mb-4'>
              <h2 className="text-2xl font-bold text-center mb-5">Description</h2>
              <p>{app.description}</p>
        </div>
   </div>
  );
};

export default AppsDetails;
