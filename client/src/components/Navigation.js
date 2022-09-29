import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
  return (
    <ul className="text-teal-500 flex flex-col text-center sm:flex-row justify-between mt-4 xl:mt-0 xl:mr-4 text-4xl">
      <li className="mt-4 lg:mr-8">
        <a
          href="#aboutme"
          onClick={() => handlePageChange('AboutMe')}

          className={currentPage === 'AboutMe'
            ? 'text-blue-400 font-black drop-shadow-xl hover:text-blue-200'
            : 'text-blue-400 hover:text-blue-100'}
        >
          About Us
        </a>
      </li>
      <li className="mt-4 lg:mr-8">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}

          className={currentPage === 'Home'
          ? 'text-blue-400 font-black drop-shadow-xl hover:text-blue-200'
          : 'text-blue-400 hover:text-blue-100'}
        >
          Home
        </a>
      </li>
      <li className="mt-4 lg:mr-8">
        <a
          href="#login"
          onClick={() => handlePageChange('LogIn')}

          className={currentPage === 'LogIn'
          ? 'text-blue-400 font-black drop-shadow-xl hover:text-blue-200'
          : 'text-blue-400 hover:text-blue-100'}
        >
          Log In
        </a>
      </li>
      <li className="mt-4 lg:mr-8">
        <a
          href="#signup"
          onClick={() => handlePageChange('SignUp')}

          className={currentPage === 'SignUp'
          ? 'text-blue-400 font-black drop-shadow-xl hover:text-blue-200'
            : 'text-blue-400 hover:text-blue-100'}
        >
          Sign Up
        </a>
      </li>
    </ul>
  );
}

export default Navigation;
