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

  return (
    <div>
      <h1 className='text-5xl mb-12 text-yellow-100 text-center'>Character Customization</h1>         
      {charSprites.map((char) =>
        <img className='w-1/4' src={char.link} alt={char.name} />
      )}
      
      <form className="text-center">
      <input className= 'text-center' placeholder="enter name"></input>
      </form>
    </div>
  );
};

export default CharCust;
