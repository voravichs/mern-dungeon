import React from 'react';

export default function Home({ currentPage, handlePageChange}) {
  return (
    <div>
      <h1 className='text-5xl mb-12 text-yellow-100 text-center'>Mern Dungeon</h1>
      <p>
        <a
          href="#CharCust"
          onClick={() => handlePageChange('CharCust')}

          className={currentPage === 'CharCust'
          ? 'text-yellow-200 font-black drop-shadow-xl hover:text-yellow-300'
          : 'text-yellow-100 hover:text-yellow-200'}
        >
        New Game
        </a>
        </p>
    </div>
  );
}
