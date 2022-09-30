import React from 'react';
import { Link } from 'react-router-dom';

function Navigation({currentPage, handlePageChange}) {
  return (
    <ul className="text-teal-500 flex flex-col text-center sm:flex-row justify-between mt-4 xl:mt-0 xl:mr-4 text-4xl">
      <li className="mt-4 lg:mr-8">
        <Link
          to="/"
          onClick={() => handlePageChange('Home')}

          className={currentPage === 'Home'
          ? 'text-blue-500 font-black drop-shadow-xl hover:text-blue-200'
          : 'text-blue-400 hover:text-blue-100'}
        >
          Home
        </Link>
      </li>
      <li className="mt-4 lg:mr-8">
        <Link
          to="/login"
          onClick={() => handlePageChange('LogIn')}

          className={currentPage === 'LogIn'
          ? 'text-blue-500 font-black drop-shadow-xl hover:text-blue-200'
          : 'text-blue-400 hover:text-blue-100'}
        >
          Log In
        </Link>
      </li>
      <li className="mt-4 lg:mr-8">
        <Link
          to="/signup"
          onClick={() => handlePageChange('SignUp')}

          className={currentPage === 'SignUp'
          ? 'text-blue-500 font-black drop-shadow-xl hover:text-blue-200'
            : 'text-blue-400 hover:text-blue-100'}
        >
          Sign Up
        </Link>
      </li>
      <li className="mt-4 lg:mr-8">
        <Link
          to="/aboutus"
          onClick={() => handlePageChange('AboutUs')}

          className={currentPage === 'AboutUs'
            ? 'text-blue-500 font-black drop-shadow-xl hover:text-blue-200'
            : 'text-blue-400 hover:text-blue-100'}
        >
          About Us
        </Link>
      </li>
      <li className="mt-4 lg:mr-8">
        <a
          href="#install"
          onClick={() => handlePageChange('Install')}

          className={currentPage === 'Install'
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
