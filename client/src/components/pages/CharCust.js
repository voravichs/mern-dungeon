import { useState } from 'react';
import Player from '../../utils/Player';

const special = [
  {
    link: "https://i.imgur.com/IKkNfxJ.png",
    name: "orc"
  },
  {
    link: "https://i.imgur.com/DcCfdrm.png",
    name: "clown"
  },
  {
    link: "https://i.imgur.com/O3mZbud.png",
    name: "legend of zelda link"
  },
  {
    link: "https://i.imgur.com/zUjGl7b.png",
    name: "male archer"
  },
  {
    link: "https://i.imgur.com/d0GkpSd.png",
    name: "female archer"
  },
  {
    link: "https://i.imgur.com/Rt5QPp9.png",
    name: "knight"
  },
  {
    link: "https://i.imgur.com/a5j7Zt1.png",
    name: "king"
  },
  {
    link: "https://i.imgur.com/yvaVbNn.png",
    name: "santa"
  },
  {
    link: "https://i.imgur.com/DcCfdrm.png",
    name: "clown"
  },
]

const mages = [
  {
    link: "https://i.imgur.com/cg33q2p.png",
    name: "mage male 1"
  },
  {
    link: "https://i.imgur.com/9DaKajc.png",
    name: "mage male 2"
  },
  {
    link: "https://i.imgur.com/6BaNEVx.png",
    name: "mage male 3"
  },
  {
    link: "https://i.imgur.com/ks5ip37.png",
    name: "mage female 1"
  },
  {
    link: "https://i.imgur.com/9D4tyho.png",
    name: "mage female 2"
  },
  {
    link: "https://i.imgur.com/Wzf7usJ.png",
    name: "mage female 3"
  },
  {
    link: "https://i.imgur.com/VdO7vOc.png",
    name: "mage male 4"
  },
  {
    link: "https://i.imgur.com/8Kq17ca.png",
    name: "mage male 5"
  },
  {
    link: "https://i.imgur.com/cbOherN.png",
    name: "mage male 6"
  },
  {
    link: "https://i.imgur.com/DMsJKMD.png",
    name: "mage female 4"
  },
  {
    link: "https://i.imgur.com/5SzeQfH.png",
    name: "mage female 5"
  },
  {
    link: "https://i.imgur.com/fupiH4E.png",
    name: "mage female 6"
  },
  {
    link: "https://i.imgur.com/aGyRjJw.png",
    name: "mage male 7"
  },
  {
    link: "https://i.imgur.com/cZ1ZYnS.png",
    name: "mage male 8"
  },
  {
    link: "https://i.imgur.com/1hRAKES.png",
    name: "mage male 9"
  },
  {
    link: "https://i.imgur.com/uYdtslc.png",
    name: "mage female 7"
  },
  {
    link: "https://i.imgur.com/eO8dqbl.png",
    name: "mage female 8"
  },
  {
    link: "https://i.imgur.com/vOGzpjL.png",
    name: "mage female 9"
  },
]

const rogues = [
  {
    link: "https://i.imgur.com/aIAahnA.png",
    name: "rogue male 1"
  },
  {
    link: "https://i.imgur.com/POwbKGQ.png",
    name: "rogue male 2"
  },
  {
    link: "https://i.imgur.com/8qSkhgR.png",
    name: "rogue male 3"
  },
  {
    link: "https://i.imgur.com/C2nU8px.png",
    name: "rogue female 1"
  },
  {
    link: "https://i.imgur.com/bhVfcDE.png",
    name: "rogue female 2"
  },
  {
    link: "https://i.imgur.com/dCUQspe.png",
    name: "rogue female 3"
  },
  {
    link: "https://i.imgur.com/NGb5z4W.png",
    name: "rogue male 4"
  },
  {
    link: "https://i.imgur.com/BahredX.png",
    name: "rogue male 5"
  },
  {
    link: "https://i.imgur.com/I2yBqr1.png",
    name: "rogue male 6"
  },
  {
    link: "https://i.imgur.com/XVdzYim.png",
    name: "rogue female 4"
  },
  {
    link: "https://i.imgur.com/XJztwUe.png",
    name: "rogue female 5"
  },
  {
    link: "https://i.imgur.com/4XYkPj3.png",
    name: "rogue female 6"
  },
  {
    link: "https://i.imgur.com/aRM0uh1.png",
    name: "rogue male 7"
  },
  {
    link: "https://i.imgur.com/GOFrFju.png",
    name: "rogue male 8"
  },
  {
    link: "https://i.imgur.com/qlVE0PA.png",
    name: "rogue male 9"
  },
  {
    link: "https://i.imgur.com/zgfMAu5.png",
    name: "rogue female 7"
  },
  {
    link: "https://i.imgur.com/Co2OFKX.png",
    name: "rogue female 8"
  },
  {
    link: "https://i.imgur.com/P0dKCP5.png",
    name: "rogue female 9"
  },
]

const warriors = [
  {
    link: "https://i.imgur.com/vXI9qWq.png",
    name: "warrior male 1"
  },
  {
    link: "https://i.imgur.com/chf5Hhb.png",
    name: "warrior male 2"
  },
  {
    link: "https://i.imgur.com/8DHRIkk.png",
    name: "warrior male 3"
  },
  {
    link: "https://i.imgur.com/a3Bx4Gx.png",
    name: "warrior female 1"
  },
  {
    link: "https://i.imgur.com/h7McTWB.png",
    name: "warrior female 2"
  },
  {
    link: "https://i.imgur.com/KFTCQfT.png",
    name: "warrior female 3"
  },
  {
    link: "https://i.imgur.com/QyvWcCv.png",
    name: "warrior male 4"
  },
  {
    link: "https://i.imgur.com/rZ4LfIP.png",
    name: "warrior male 5"
  },
  {
    link: "https://i.imgur.com/MqdpZBt.png",
    name: "warrior male 6"
  },
  {
    link: "https://i.imgur.com/YmSQ5MK.png",
    name: "warrior female 4"
  },
  {
    link: "https://i.imgur.com/b0t2WtW.png",
    name: "warrior female 5"
  },
  {
    link: "https://i.imgur.com/nJNl5Rh.png",
    name: "warrior female 6"
  },
  {
    link: "https://i.imgur.com/kUecslU.png",
    name: "warrior male 7"
  },
  {
    link: "https://i.imgur.com/uugHOgb.png",
    name: "warrior male 8"
  },
  {
    link: "https://i.imgur.com/sw9CJbm.png",
    name: "warrior male 9"
  },
  {
    link: "https://i.imgur.com/87q2Ukw.png",
    name: "warrior female 7"
  },
  {
    link: "https://i.imgur.com/GdRNQY8.png",
    name: "warrior female 8"
  },
  {
    link: "https://i.imgur.com/5gL3CQC.png",
    name: "warrior female 9"
  },
]

let charSprites = warriors;

const CharCust = ({handlePageChange}) => {
  const [currentSprite, setCurrentSprite] = useState(0);
  const [chosenSprite, setChosenSprite] = useState(charSprites[0]);

  const handleStartGame = (e) => {
    e.preventDefault();
    const newCharacter = new Player(20, 10, 3, 3, 2, chosenSprite.link, "player character");
    const newEnemy = new Player(20, 8, 4, 4, 2, special[8].link, "clown");
    handlePageChange('Battle', newCharacter, newEnemy);
  }

  const handleNext = (e) => {
    e.preventDefault();
    if (currentSprite === charSprites.length - 1) {
      setChosenSprite(charSprites[0]);
      setCurrentSprite(0);
    } else {
      setChosenSprite(charSprites[currentSprite + 1]);
      setCurrentSprite(currentSprite + 1);

    }
  }

  const handlePrev = (e) => {
    e.preventDefault();
    if (currentSprite === 0) {
      setChosenSprite(charSprites[charSprites.length - 1]);
      setCurrentSprite((charSprites.length - 1));
    } else {
      setChosenSprite(charSprites[currentSprite - 1]);
      setCurrentSprite(currentSprite - 1);
    }
  }

  const handleSelect = (e) => {
    switch (e.target.value) {
      case "warrior":
        charSprites = warriors;
        setChosenSprite(charSprites[0]);
        setCurrentSprite(0);
        break;
      case "rogue":
        charSprites = rogues;
        setChosenSprite(charSprites[0]);
        setCurrentSprite(0);
        break;
      case "mage":
        charSprites = mages;
        setChosenSprite(charSprites[0]);
        setCurrentSprite(0);
        break;
      case "special":
        charSprites = special;
        setChosenSprite(charSprites[0]);
        setCurrentSprite(0);
        break;

      default:
        break;
    }
  }

  return (
    <div>
      <h1 className='text-5xl mb-12 text-yellow-100 text-center'>Character Customization</h1>
      <div className='grid grid-cols-2'>
        <div>
          <p className='text-4xl text-yellow-100 text-center'> Select A Portrait</p>
          <img className="w-2/3 mx-auto" src={chosenSprite.link} alt={chosenSprite.name}></img>
          <div className='flex mb-8'>
            <button className='block w-1/8 text-yellow-100 text-2xl bg-emerald-600 hover:bg-emerald-700 transition-all ring-2 rounded-lg ring-emerald-500 p-4 mx-auto'
              type="button"
              onClick={handlePrev}>
              Prev
            </button>
            <button className='block w-1/8 text-yellow-100 text-2xl bg-emerald-600 hover:bg-emerald-700 transition-all ring-2 rounded-lg ring-emerald-500 p-4 mx-auto'
              type="button"
              onClick={handleNext}>
              Next
            </button>
          </div>
          <p className='text-3xl mb-4 text-yellow-100 text-center'>Portrait Style</p>
          <div className="w-1/2 lg:max-w-sm mx-auto">
            <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
              onChange={handleSelect}>
              <option value="warrior">Warrior</option>
              <option value="rogue">Rogue</option>
              <option value="mage">Mage</option>
              <option value="special">Special</option>
            </select>
          </div>
        </div>
        <div className='my-auto'>
          <p className='text-4xl mb-8 text-yellow-100 text-center'> Name your Character</p>
          <input className='text-center p-4 text-xl mb-8 w-full' placeholder="Enter Name"></input>
          <button className='block w-1/2 text-yellow-100 text-2xl bg-emerald-600 hover:bg-emerald-700 transition-all ring-2 rounded-lg ring-emerald-500 p-4 mx-auto'
            type="button"
            onClick={handleStartGame}>
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharCust;
