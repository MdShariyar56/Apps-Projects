import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import LoadingSpinner from '../Component/LoadingSpinner';
import { ArrowDownToLine, Star } from 'lucide-react';

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState('none'); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const data = JSON.parse(localStorage.getItem('installedApps')) || [];
    setInstalledApps(data);
    setLoading(false);
  }, []);

  const handleUninstall = (id) => {
    const filtered = installedApps.filter(app => app.id !== id);
    setInstalledApps(filtered);
    localStorage.setItem('installedApps', JSON.stringify(filtered));
    toast.success('App uninstalled successfully!', { duration: 2000 });
  };

  const sortedApps = [...installedApps].sort((a, b) => {
    const downloadsA = parseInt(a.downloads); 
    const downloadsB = parseInt(b.downloads);
    if (sortOrder === 'high') return downloadsB - downloadsA;
    if (sortOrder === 'low') return downloadsA - downloadsB;
    return 0;
  });

  if (loading) return <LoadingSpinner />;

  return (
    <div className='bg-gray-200 min-h-screen'>
      <div className='py-5 container mx-auto'>
        <div className='text-center py-4'>
          <h1 className='text-4xl font-bold py-5'>Your Installed Apps</h1>
          <p className='text-gray-600 pb-5'>Explore all apps installed on your device</p>
        </div>

        <div className='flex   justify-between items-start sm:items-center container mx-auto px-5 lg:px-0 gap-3'>
          <div>
            <p>({installedApps.length}) Apps Found</p>
          </div>
          <div className="dropdown dropdown-start relative">
            <div tabIndex={0} className="btn w-full sm:w-auto">Sort By Size ⬇️</div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-50 w-full sm:w-52 p-2 shadow-lg mt-2 sm:mt-0">
              <li><button onClick={() => setSortOrder('high')}>High to Low</button></li>
              <li><button onClick={() => setSortOrder('low')}>Low to High</button></li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-100 items-center p-3 mt-5 space-y-4">
          {sortedApps.length === 0 ? (
            <p className='text-center text-gray-500 py-10'>No apps installed yet.</p>
          ) : (
            sortedApps.map(app => (
              <div key={app.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white p-4 rounded shadow-sm gap-4">
                <div className='flex items-center gap-4 w-full sm:w-auto'>
                  <img src={app.image} className='h-16 w-16 rounded-lg object-cover' alt={app.title} />
                  <div className='flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4'>
                    <h1 className='text-xl font-semibold'>{app.title}</h1>
                    <div className='flex gap-3 flex-wrap'>
                     <span className="font-bold text-[#00D390] flex items-center gap-1">
                        <ArrowDownToLine size={16} /> {app.downloads}
                        </span>
                    <span className="font-bold text-[#FF8811] flex items-center gap-1">
                        <Star size={16} /> {app.ratingAvg}
                        </span>
                      <span className='font-bold text-gray-600'>{app.size}</span>
                    </div>
                  </div>
                </div>    

                <div className='w-full sm:w-auto flex justify-end'>
                  <button 
                    className='btn btn-success text-white w-full sm:w-auto'
                    onClick={() => handleUninstall(app.id)}
                  >
                    Uninstall
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <Toaster position="top-right" /> 
    </div>
  );
};

export default Installation;
