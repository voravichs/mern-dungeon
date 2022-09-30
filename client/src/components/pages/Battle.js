import React, { useState } from 'react';

export default function Battle({character, enemy}) {
    const [characterHP, setCharacterHP ] = useState(character.currentHealth);
    const [enemyHP, setEnemyHP ] = useState(enemy.currentHealth);
    const [charDesc, setCharDesc] = useState("Lorem Ipsum");
    const [enemyDesc, setEnemyDesc] = useState("Lorem Ipsum");

    const handleStartBattle = (e) => {
        e.preventDefault();
        if (!character.isDead() || !enemy.isDead()) {
            console.log("-- PLAYER TURN --");
            const playerAttack = character.physicalAttack(enemy)
            setEnemyHP(enemyHP - playerAttack);
            setCharDesc("You deal "+ playerAttack + " damage");
            console.log("-- ENEMY TURN --");
            const enemyAttack = enemy.physicalAttack(character);
            setCharacterHP(characterHP - enemyAttack);
            setEnemyDesc("Enemy deals "+ enemyAttack + " damage");
        }
    }
    
    return (
        <div className='bg-blue-800 border-8 p-auto'>
            <h1 className='text-5xl mb-12 p-6 text-teal-400 text-center p-auto'>Mern Dungeon</h1>
            <div className='grid grid-cols-2 mb-8'>
                <div>
                    <img className="w-2/3 mx-auto" src={character.portrait} alt={character.altText}></img>
                    <p className='text-3xl mb-4 text-teal-200 text-center'>You have {characterHP} HP.</p>
                    <p className='text-3xl mb-4 text-teal-200 text-center'> {charDesc} </p>
                </div>
                <div>
                    <img className="w-2/3 mx-auto" src={enemy.portrait} alt={enemy.altText}></img>
                    <p className='text-3xl mb-4 text-teal-200 text-center'>The enemy has {enemyHP} HP.</p>
                    <p className='text-3xl mb-4 text-teal-200 text-center'> {enemyDesc} </p>
                </div>
            </div>
            <button className='block w-1/2 text-teal-200 text-2xl bg-blue-00 hover:bg-teal-700 transition-all ring-2 rounded-lg ring-teal-500 p-4 mx-auto my-4'
                type="button"
                onClick={handleStartBattle}>
                    Battle!
            </button>
        </div>
    );
}
