import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png'


export default function Header() {
  return (
    <div className='text-blue-300'>
      <Link
        to="/">
        <img className='w-2/3' src={Logo} alt='pixel battle logo'></img>
      </Link>
    </div>
  );
}
