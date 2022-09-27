import React, { useState } from 'react';
import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';
import Portfolio from './pages/Portfolio'
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
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

export default PortfolioContainer;
