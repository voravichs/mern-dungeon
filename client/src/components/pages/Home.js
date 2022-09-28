import React from 'react';

export default function Home({handlePageChange}) {
  
  const handleNewGame = (e) => {
    e.preventDefault();
    handlePageChange('CharCust');
  };
  
  return (
    <div>
      <h1 className='text-5xl mb-12 text-yellow-100 text-center'>Mern Dungeon</h1>
      <button className='block w-1/2 text-yellow-100 text-2xl bg-emerald-600 hover:bg-emerald-700 transition-all ring-2 rounded-lg ring-emerald-500 p-4 mx-auto' 
        type="button" 
        onClick={handleNewGame}>
          New Game
        </button>
    </div>
  );
}
