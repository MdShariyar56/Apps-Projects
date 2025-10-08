import React from 'react';
import { Star } from 'lucide-react';

const AppsCard = ({app}) => {
   const {image,title,downloads,ratingAvg} = app
    return (
        <div className="card bg-base-300 border shadow-sm hover:scale-105 transition ease-in-out p-4 mt-5">
  <figure className='h-48  overflow-hidden'>
    <img
      className='w-full  object-cover'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="py-4">
    <h2 className="card-title">{title}</h2>
   <div className='flex justify-between items-center pt-5'>
     <div>
           <button className='btn rounded text-xl bg-[#F1F5E8] text-[#00D390]'>{downloads}</button> 
     </div>
     <div>
           <button className='btn rounded text-xl bg-[#f6e1cd] text-[#FF8811]'><Star></Star>{ratingAvg}</button> 
     </div>
   </div>
  </div>
</div>
    );
};

export default AppsCard;