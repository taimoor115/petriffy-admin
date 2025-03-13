import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className='flex justify-center items-center min-h-screen bg-white'>
      <div className='text-center'>
        <p className='text-xl font-black text-primary'>404</p>
        <h1 className='mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
          Page not found
        </h1>
        <p className='mt-6 text-base leading-7 text-black'>
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className='mt-10 flex items-center justify-center gap-x-6'>
          <Link
            to='/'
            className='rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'
          >
            Go back home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
