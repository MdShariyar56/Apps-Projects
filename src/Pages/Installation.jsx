import React from 'react';

const Installation = () => {
    return (
       <div className='bg-gray-200'>
         <div className='py-5 container mx-auto min-h-[calc(100vh-80px-64px)]'>
             <div className='text-center py-4'>
           <h1 className='text-4xl font-bold py-5'>Your Installed Apps</h1>
        <p className='text-gray-600 pb-5'>Explore All Trending Apps on the Market developed by us</p>
       </div>
        <div className='flex justify-between items-center container mx-auto  px-5 lg:px-0 '>
            <div>
                <p>(0) Apps Found</p>
            </div>
            <div>
                <div className="dropdown dropdown-start">
  <div tabIndex={0} role="button" className="btn m-1">Sort By Size ⬇️</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>High to Low</a></li>
    <li><a>Low to High</a></li>
  </ul>
</div>
            </div>
        </div>
        <div className=" bg-gray-100  items-center p-3 mt-5">
  <aside className="grid-flow-col items-center">
    <div className='flex justify-between items-center'>
    <div className='flex justify-center items-center '>
    <div>
         <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1" className='h-15 w-15 mr-7' alt="" />
     </div>
     <div>
        <h1 className='text-xl font-semibold'>Forest: Focus for Productivity</h1>
         <button className='font-bold mr-2 text-[#00D390]'>9M</button>
         <button className='font-bold mr-2 text-[#FF8811]'>⭐5</button>
         <button className='font-bold mr-2 text-gray-600'>258 MB</button>     </div>
    </div>    
    
     <div className='px-5'>
            <button className='btn btn-success text-white'>Unstall</button>
     </div>

    </div>
  </aside>
</div>
        </div>
       </div>
    );
};

export default Installation;