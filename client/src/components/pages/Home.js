import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1 className='text-5xl mb-12 text-teal-400 text-center'>Mern Dungeon</h1>
      <Link 
        to="/createcharacter"
        className='block w-1/2 text-teal-200 text-2xl bg-blue-00 hover:bg-teal-700 transition-all ring-2 rounded-lg ring-teal-500 p-4 text-center mx-auto' >
        New Game    
      </Link>
    </div>
  );
}
