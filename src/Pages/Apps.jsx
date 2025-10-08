import React, { useState } from 'react';
import { useLoaderData , Link} from 'react-router-dom';
import { Star } from 'lucide-react';

import AppsNotFound from './AppsNotFound';

const Apps = () => {
  const Appss = useLoaderData();
  const [search, setSearch] = useState('');
  const term = search.trim().toLowerCase();
  const searchApp = term
    ? Appss.filter(app => app.title.toLowerCase().includes(term))
    : Appss;

  if (searchApp.length === 0) {
    return <AppsNotFound />;
  }

  return (
    <div className='bg-gray-100 mb-10'>
      <div className='text-center py-5'>
        <h1 className='text-4xl font-bold py-5'>Our All Applications</h1>
        <p className='text-gray-600'>Explore All Apps on the Market developed by us. We code for Millions</p>
      </div>
      <div className='flex justify-between items-center container mx-auto px-5 lg:px-0'>
        <div>
          <p>({searchApp.length}) Apps Found</p>
        </div>
        <div>
          <label className="input">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input value={search} onChange={(e)=> setSearch(e.target.value)} type="search" required placeholder="Search Apps" />
          </label>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 container mx-auto mt-5 p-5 lg:p-0">
        {searchApp.map(app => (
         <Link to={`/apps/${app.id}`} key={app.id} 
         className="block"
         >
             <div
            key={app.id}
            className="card bg-base-300 border shadow-sm hover:scale-105 transition ease-in-out p-4"
          >
            <figure className="h-48 overflow-hidden">
              <img className="w-full object-cover" src={app.image} alt={app.title} />
            </figure>
            <div className="py-4">
              <h2 className="card-title">{app.title}</h2>
              <div className="flex justify-between items-center pt-5">
                <button className="btn rounded text-xl bg-[#F1F5E8] text-[#00D390]">
                  {app.downloads}
                </button>
                <button className="btn rounded text-xl bg-[#f6e1cd] text-[#FF8811] flex items-center gap-1">
                  <Star size={18} /> {app.ratingAvg}
                </button>
              </div>
            </div>
          </div>
         
         </Link>
        ))}
      </div>
    </div>
  );
};

export default Apps;
