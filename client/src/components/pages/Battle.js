import React, { useState } from 'react';

const backgrounds = [
    "https://i.imgur.com/vGtYvRy.png",
    "https://i.imgur.com/GDxpwmD.png",
    "https://i.imgur.com/yeXw3yH.png",
    "https://i.imgur.com/NaL3DUh.png",
    "https://i.imgur.com/FtaTIg1.png",
    "https://i.imgur.com/EsqSeK8.png",
    "https://i.imgur.com/kBJhirx.png",
    "https://i.imgur.com/ugir4cW.png",
    "https://i.imgur.com/rqosmhG.png",
    "https://i.imgur.com/Nybvq94.png",
]

const randomBackground = () => {
    let randomNum = Math.floor(Math.random() * backgrounds.length);
    return backgrounds[randomNum];
}

export default function Battle({ character, enemy }) {
    const [characterHP, setCharacterHP] = useState(character.currentHealth);
    const [enemyHP, setEnemyHP] = useState(enemy.currentHealth);
    const [charDesc, setCharDesc] = useState("Lorem Ipsum");
    const [enemyDesc, setEnemyDesc] = useState("Lorem Ipsum");
    const [background] = useState(randomBackground());

    const handleStartBattle = (e) => {
        e.preventDefault();
        if (!character.isDead() || !enemy.isDead()) {
            console.log("-- PLAYER TURN --");
            const playerAttack = character.physicalAttack(enemy)
            setEnemyHP(enemyHP - playerAttack);
            setCharDesc("You deal " + playerAttack + " damage");
            console.log("-- ENEMY TURN --");
            const enemyAttack = enemy.physicalAttack(character);
            setCharacterHP(characterHP - enemyAttack);
            setEnemyDesc("Enemy deals " + enemyAttack + " damage");
        }
    }

    return (
        <div
            className='bg-local bg-origin-border bg-cover bg-no-repeat bg-center'
            style={{ backgroundImage: `url(${background})` }}>
            <div className="h-screen my-auto grid grid-rows-3">
                <div className='grid lg:grid-cols-2 mb-8 row-span-2'>
                    <div className="my-auto">
                        <img className="w-48 md:w-64 xl:w-80 mx-auto" src={character.portrait} alt={character.altText}></img>
                        <div className="rounded-lg border-4 bg-gradient-to-b from-gray-200 to-gray-500 p-2 w-2/3 mx-auto">
                            <div className='bg-gradient-to-b from-blue-600 to-indigo-900 p-8'>
                                <p className='text-3xl mb-4 text-teal-200 text-center'>{character.altText} has {characterHP} HP.</p>
                                <p className='text-3xl mb-4 text-teal-200 text-center'> {charDesc} </p>
                            </div>
                        </div>
                    </div>
                    <div className="my-auto">
                        <img className="w-48 md:w-64 xl:w-80 mx-auto" src={enemy.portrait} alt={enemy.altText}></img>
                        <div className="rounded-lg border-4 bg-gradient-to-b from-gray-200 to-gray-500 p-2 w-2/3 mx-auto">
                            <div className='bg-gradient-to-b from-blue-600 to-indigo-900 p-8'>
                                <p className='text-3xl mb-4 text-teal-200 text-center'>{enemy.altText} has {enemyHP} HP.</p>
                                <p className='text-3xl mb-4 text-teal-200 text-center'> {enemyDesc} </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-full rounded-lg border-4 bg-gradient-to-b from-gray-200 to-gray-500 p-2 row-span-1">
                    <div className='h-full bg-gradient-to-b from-blue-600 to-indigo-900 p-8 grid grid-rows-3 md:grid-rows-2 md:grid-cols-2'>
                        <button className='block w-1/2 text-teal-200 text-2xl bg-blue-00 hover:bg-teal-700 transition-all ring-2 rounded-lg ring-teal-500 p-4 mx-auto my-4'
                            type="button"
                            onClick={handleStartBattle}>
                            Attack
                        </button>
                        <button className='block w-1/2 text-teal-200 text-2xl bg-blue-00 hover:bg-teal-700 transition-all ring-2 rounded-lg ring-teal-500 p-4 mx-auto my-4'
                            type="button"
                            onClick={handleStartBattle}>
                            Defend
                        </button>
                        <button className='block w-1/2 text-teal-200 text-2xl bg-blue-00 hover:bg-teal-700 transition-all ring-2 rounded-lg ring-teal-500 p-4 mx-auto my-4'
                            type="button"
                            onClick={handleStartBattle}>
                            Escape
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}
