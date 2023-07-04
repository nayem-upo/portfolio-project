import React from 'react';

const Loader = () => {
    return (
        <div className='loader'>
            {/* Add your loader content here */}
            <span className="loading loading-ring text-[#DC0DFE] w-[100px]"></span>
            <h1 className='text-[#DC0DFE] text-xl font-semibold uppercase my-2'>DEVELOPER <span className='text-[#1ed2ff]'>NAem</span></h1>
        </div>
    );
};

export default Loader;