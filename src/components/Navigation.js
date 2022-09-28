import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
  return (
    <ul className="text-yellow-100 flex flex-col text-center sm:flex-row justify-between mt-4 xl:mt-0 xl:mr-4 text-4xl">
      <li className="mt-4 lg:mr-8">
        <a
          href="#aboutme"
          onClick={() => handlePageChange('AboutMe')}

          className={currentPage === 'AboutMe'
            ? 'text-yellow-200 font-black drop-shadow-xl hover:text-yellow-300'
            : 'text-yellow-100 hover:text-yellow-200'}
        >
          About Us
        </a>
      </li>
      <li className="mt-4 lg:mr-8">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}

          className={currentPage === 'Home'
            ? 'text-yellow-200 font-black drop-shadow-xl hover:text-yellow-300'
            : 'text-yellow-100 hover:text-yellow-200'}
        >
          Home
        </a>
      </li>
      <li className="mt-4 lg:mr-8">
        <a
          href="#login"
          onClick={() => handlePageChange('LogIn')}

          className={currentPage === 'LogIn'
            ? 'text-yellow-200 font-black drop-shadow-xl hover:text-yellow-300'
            : 'text-yellow-100 hover:text-yellow-200'}
        >
          Log In
        </a>
      </li>
      <li className="mt-4 lg:mr-8">
        <a
          href="#signup"
          onClick={() => handlePageChange('SignUp')}

          className={currentPage === 'SignUp'
          ? 'text-yellow-200 font-black drop-shadow-xl hover:text-yellow-300'
          : 'text-yellow-100 hover:text-yellow-200'}
        >
          Sign Up
        </a>
      </li>
    </ul>
  );
}

export default Navigation;
