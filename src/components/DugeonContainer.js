import React, { useState } from 'react';
import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';
import LogIn from './pages/Home'
import AboutMe from './pages/AboutMe';
import Home from './pages/LogIn';
import SignUp from './pages/SignUp';

function DungeonContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'About Me') {
      return <AboutMe />;
    }
    if (currentPage === 'Log In') {
      return <LogIn />;
    }
    if (currentPage === 'Home') {
      return <Home />;
    }
    return <SignUp />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='mx-auto bg-emerald-600 '>
      <div className='flex flex-col lg:flex-row justify-between p-12 bg-emerald-500 drop-shadow-xl'>
        <Header />
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
      <div className='m-16'>
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
}

export default DungeonContainer;
