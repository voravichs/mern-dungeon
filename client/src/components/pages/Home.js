import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

export default function Home() {
  return (
    <div>
      <p className='text-4xl mb-12 text-blue-400 text-center'>
        A foul wind blows through the ancient lands of <span className='text-blue-200'>PENNSYLVANIA...</span> 
        <br></br>
        O' brave <span className='text-blue-200'>MERN stack programmer</span>, have ye the gall to best this perilous challenge?
      </p>
      {Auth.loggedIn() ? (
        <>
          <Link 
            to="/createcharacter"
            className='block w-1/2 text-teal-200 text-2xl bg-blue-00 hover:bg-blue-800 hover:text-teal-200 transition-all ring-2 rounded-lg ring-teal-500 p-4 text-center mx-auto' >
            Create New Character
          </Link>
          <Link 
            to="/createcharacter"
            className='block w-1/2 mt-8 text-teal-200 text-2xl bg-blue-00 hover:bg-blue-800 hover:text-teal-200 transition-all ring-2 rounded-lg ring-teal-500 p-4 text-center mx-auto' >
            New Game    
          </Link>
        </>
      ) : (
        <>
          <p className='text-4xl mb-12 text-blue-400 text-center'> Please log in or sign up to continue. </p>
          <Link 
            to="/"
            className='block w-1/2 text-teal-200 text-2xl bg-blue-00 hover:bg-blue-800 hover:text-teal-200 transition-all ring-2 rounded-lg ring-teal-500 p-4 text-center mx-auto' >
            New Game    
          </Link>
        </>
      )}
    </div>
  );
}
