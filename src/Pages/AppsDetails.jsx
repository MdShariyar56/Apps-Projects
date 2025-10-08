import { ArrowDownToLine, Star, ThumbsUp } from 'lucide-react';
import React from 'react';

const AppsDetails = () => {
    return (
        <div className="min-h-screen flex justify-start items-start bg-base-200 px-5 py-10">
            <div className="  flex flex-col lg:flex-row gap-8 p-8 max-w-4xl w-full">
                
                <div className="flex justify-center items-center w-full lg:w-1/2">
                    <img 
                        src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1" 
                        alt="App Banner" 
                        className="rounded-xl w-[150] h-[250px] object-cover shadow-sm"
                    />
                </div>

                
                <div className="flex flex-col justify-center gap-4 w-full lg:w-1/2">
                    <h1 className="text-3xl font-bold text-gray-800">
                        SmPlan: ToDo List with Reminder
                    </h1>
                    <p className="text-gray-600">
                        Developed by <span className="font-semibold text-blue-600">productive.io</span>
                    </p>
                    <div className='flex gap-x-6'>
                        <div>
                            <h1 className='text-[#00D390]'> <ArrowDownToLine /></h1>
                            <p>Downloads</p>
                            <h1>8M</h1>
                        </div>
                        <div>
                            <h1 className='text-[#FF8811]'> <Star /></h1>
                            <p>Average Ratings</p>
                            <h1 className='text-xl font-bold'>8M</h1>
                        </div>
                        <div>
                            <h1 className='text-blue-600'> <ThumbsUp /></h1>
                            <p>Downloads</p>
                            <h1>8M</h1>     
                        </div>
                    </div>
                    <button className="btn btn-success w-fit mt-3">
                        Install Now (291 MB)
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AppsDetails;
