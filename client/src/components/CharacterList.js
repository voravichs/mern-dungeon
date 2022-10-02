import React from 'react';

const CharacterList = ({ characters }) => {
    
    if (!characters.length) {
        return <h3>You have no adventurers registered with the Guild.</h3>;
    }

    return (
        <div>
            {characters &&
                characters.map((character) => (
                    <div key={character._id}>
                        <p>{character.name}</p>
                        <img className="w-2/3 mx-auto" src={character.link} alt={character.name + "'s portrait"}></img>
                        <p>Level: {character.level}</p>
                        <p>Attack: {character.attack}</p>
                        <p>Defense: {character.defense}</p>
                        <br></br>
                    </div>

                ))}
        </div>
    );
};

export default CharacterList;
