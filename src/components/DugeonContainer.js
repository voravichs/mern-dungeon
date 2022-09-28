import React, { useState } from 'react';
import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';
import LogIn from './pages/LogIn'
import AboutMe from './pages/AboutMe';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import CharCust from './pages/CharCust';

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
    if (currentPage === 'CharCust') {
      return <CharCust />;
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
