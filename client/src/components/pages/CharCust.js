import Sprite from '../CharSprite';
import { useState } from 'react';

const charSprites = [
  { 
    link: 'https://i.imgur.com/AOjR8o4.png',
    name: 'warrior female 1'
  },
  { 
    link: 'https://i.imgur.com/Hwzy38K.png',
    name: 'legend of zelda link'
  }
];


const CharCust = () => {
  const [currentSprite, setCurrentSprite] = useState(1);
  const [chosenSprite, setChosenSprite] = useState(charSprites[currentSprite]);

  const handleStartGame = (e) => {
    e.preventDefault();
    console.log(chosenSprite.link);
    console.log(chosenSprite.name);
  }

  const handleNext = (e) => {
    if (currentSprite === charSprites.length - 1) {
      setCurrentSprite(0);
      setChosenSprite(charSprites[currentSprite]);
    } else {
      setCurrentSprite(currentSprite+ 1);
      setChosenSprite(charSprites[currentSprite]);
    }
  }

  const handlePrev = (e) => {
    if (currentSprite === 0) {
      setCurrentSprite((charSprites.length - 1));
      setChosenSprite(charSprites[currentSprite]);
    } else {
      setCurrentSprite(currentSprite- 1);
      setChosenSprite(charSprites[currentSprite]);
    }
  }
  
  return (
    <div>
      <h1 className='text-5xl mb-12 text-yellow-100 text-center'>Character Customization</h1>         

        <Sprite sprite={chosenSprite}/>
        <button className='block w-1/8 text-yellow-100 text-2xl bg-emerald-600 hover:bg-emerald-700 transition-all ring-2 rounded-lg ring-emerald-500 p-4 mx-auto' 
          type="button" 
          onClick={handleNext}>
            Next
        </button>
        <button className='block w-1/8 text-yellow-100 text-2xl bg-emerald-600 hover:bg-emerald-700 transition-all ring-2 rounded-lg ring-emerald-500 p-4 mx-auto' 
          type="button" 
          onClick={handlePrev}>
            Prev
        </button>
      <input className= 'text-center' placeholder="enter name"></input>
      <button className='block w-1/2 text-yellow-100 text-2xl bg-emerald-600 hover:bg-emerald-700 transition-all ring-2 rounded-lg ring-emerald-500 p-4 mx-auto' 
        type="button" 
        onClick={handleStartGame}>
          Start Game
      </button>
    </div>
  );
};

export default CharCust;
