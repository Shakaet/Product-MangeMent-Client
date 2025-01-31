import React from 'react';

const SharedTitle = ({heading,subheading}) => {
    return (
        <div className='mx-auto text-center md:w-4/12 my-8 mt-5'>
             <p className='text-yellow-600 mb-2 font-extrabold text-xl'>--- {subheading} ---</p>
             <h1 className='text-4xl uppercase border-y-4 py-4 text-blue-500 font-extrabold'>{heading}</h1>
        </div>

        
    );
};

export default SharedTitle;