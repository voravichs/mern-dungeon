import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
  return (
    <ul className="text-yellow-100 flex flex-col text-center sm:flex-row justify-between mt-4 xl:mt-0 xl:mr-4 text-4xl">
      <li className="mt-4 lg:mr-8">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}

          className={currentPage === 'About'
            ? 'text-yellow-200 font-black drop-shadow-xl hover:text-yellow-300'
            : 'text-yellow-100 hover:text-yellow-200'}
        >
          About
        </a>
      </li>
      <li className="mt-4 lg:mr-8">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}

          className={currentPage === 'Portfolio'
            ? 'text-yellow-200 font-black drop-shadow-xl hover:text-yellow-300'
            : 'text-yellow-100 hover:text-yellow-200'}
        >
          Portfolio
        </a>
      </li>
      <li className="mt-4 lg:mr-8">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}

          className={currentPage === 'Contact'
            ? 'text-yellow-200 font-black drop-shadow-xl hover:text-yellow-300'
            : 'text-yellow-100 hover:text-yellow-200'}
        >
          Contact
        </a>
      </li>
      <li className="mt-4 lg:mr-8">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}

          className={currentPage === 'Resume'
          ? 'text-yellow-200 font-black drop-shadow-xl hover:text-yellow-300'
          : 'text-yellow-100 hover:text-yellow-200'}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default Navigation;
