import React, { useState } from 'react';
import Navigation from './Navigation';
import Header from './Header';
import Home from './pages/Home'
import AboutMe from './pages/AboutMe';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Install from './pages/Install';
import CharCust from './pages/CharCust';
import Battle from './pages/Battle';

function DungeonContainer() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [newCharacter, setNewCharacter] = useState();
  const [newEnemy, setNewEnemy] = useState();

  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'LogIn') {
      return <LogIn />;
    }
    if (currentPage === 'Install'){
      return <Install/>
    }
    if (currentPage === 'Home') {
      return <Home handlePageChange={handlePageChange}/>;
    }
    if (currentPage === 'CharCust') {
      return <CharCust handlePageChange={handlePageChange}/>;
    }
    if (currentPage === 'Battle') {
      return <Battle character={newCharacter} enemy={newEnemy}/>;
    }
    return <SignUp />;
  };

  const handlePageChange = (page, character, enemy) => {
    setCurrentPage(page);
    if (character) {
      setNewCharacter(character);
    } 
    if (enemy) {
      setNewEnemy(enemy);
    }
  }

  return (
    <div className='mx-auto bg-gray-800 h-screen '>
      <div className='flex flex-col lg:flex-row justify-between p-12 bg-gray-900 drop-shadow-xl'>
        <Header />
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
      <div className='m-16'>
        {renderPage()}
      </div>
    </div>
  );
}

export default DungeonContainer;
