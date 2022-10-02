import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { GET_SINGLE_USER } from '../../utils/queries';

const enemies = [
    {
        level: 1,
        link: "https://i.imgur.com/tJ3kdEA.png",
        name: "Slime"
    },
    {
        level: 2,
        link: "https://i.imgur.com/vpxhQEK.png",
        name: "Mushroom"
    },
    {
        level: 3,
        link: "https://i.imgur.com/KCiaxyc.png",
        name: "Goblin"
    },
    {
        level: 4,
        link: "https://i.imgur.com/r9qUBD7.png",
        name: "Skeleton"
    },
    {
        level: 5,
        link: "https://i.imgur.com/MYSSZeL.png",
        name: "Flaming Skull"
    },
    {
        level: 6,
        link: "https://i.imgur.com/DcCfdrm.png",
        name: "Clown"
    },
    {
        level: 7,
        link: "https://i.imgur.com/IKkNfxJ.png",
        name: "Orc"
    },
    {
        level: 8,
        link: "https://i.imgur.com/AwcBbx5.png",
        name: "Golem"
    },
]

export default function BountyBoard({ handleBattle }) {

    const { username } = useParams();
    const { loading, data } = useQuery(GET_SINGLE_USER, {
        variables: { username: username },
    });
    const characters = data?.singleUser.savedChars || [];

    const [chosenCharacter, setChosenCharacter] = useState(characters[0].link);

    const handleSelect = (e) => {
        setChosenCharacter(e.target.value);
    }

    const handleStartBattle = (e) => {
        e.preventDefault();
            //const newCharacter = new Player(20, 5, 2, chosenSprite.link, "player character");
    //const newEnemy = new Player(20, 4, 2, special[9].link, "clown");
    //handleBattle(newCharacter, newEnemy);
    }

    return (
        <div>
            <div className='border-b-4 border-b-gray-300 pb-8'>
                <p className='text-4xl md:text-5xl mb-12 text-teal-400 text-center py-3'>BOUNTY BOARD</p>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <div className="flex flex-col lg:max-w-sm mx-auto pb-3">
                        <div className='mx-auto'>
                            <p className='text-2xl mb-4 text-teal-200 text-center'> Choose Your Character</p>
                            <select className="w-full p-2.5 text-teal-200 bg-gray-700 border border-teal-200 rounded-md shadow-sm ring-teal-500 appearance-none focus:border-teal-600"
                                onChange={handleSelect}>
                                {characters &&
                                    characters.map((character) => (
                                        <option
                                            key={character._id}
                                            className="rounded-lg border-4 bg-gradient-to-b from-gray-200 to-gray-500 p-2"
                                            value={character.link}>
                                            {character.name}, Level {character.level}
                                        </option>
                                    ))}
                            </select>
                        </div>
                        <img className="mx-auto md:w-1/2" src={chosenCharacter} alt={chosenCharacter}></img>
                    </div>
                )}
            </div>
            <p className='text-4xl mb-12 text-teal-400 text-center mt-8'> Choose A Bounty</p>
            <div className='mt-8 grid lg:grid-cols-2'>
                {enemies &&
                    enemies.map((enemy) => (
                        <div key={enemy.level} className='bg-local bg-origin-border bg-contain bg-no-repeat bg-center' style={{ backgroundImage: "url(https://i.imgur.com/faKcT9i.png)" }}>
                            <p className='text-xl text-black text-center pt-12'>Level: {enemy.level}</p>
                            <p className='text-3xl text-black  text-center '>{enemy.name}</p>
                            <img className="w-1/3 mx-auto pb-12" src={enemy.link} alt={enemy.name + "'s portrait"}></img>
                        </div>
                    ))}
            </div>
            <hr className='mt-20'></hr>
            <p className='text-4xl mb-12 text-teal-400 text-center mt-8'> Or, if you have the guts, <br></br>VANQUISH THE DARK LORD</p>
            <Link
                to='/battle'>
                <div key={9} className='bg-local bg-origin-border bg-contain bg-no-repeat bg-center mt-12' style={{ backgroundImage: "url(https://i.imgur.com/faKcT9i.png)" }}>
                    <p className='text-xl text-black text-center pt-12'>Level: 99</p>
                    <p className='text-3xl text-black  text-center '>Ben, the Dark Lord</p>
                    <img className="w-1/3 mx-auto pb-12" src={"https://i.imgur.com/cIOapB8.png"} alt={"Ben's portrait"}></img>
                </div>
            </Link>
        </div>
    );
}
