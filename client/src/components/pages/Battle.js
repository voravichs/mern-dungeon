import React, { useState } from 'react';

export default function Battle(props) {
    const [characterHP, setCharacterHP ] = useState(props.character.currentHealth);
    const [enemyHP, setEnemyHP ] = useState(props.enemy.currentHealth);
    const [charDesc, setCharDesc] = useState("Lorem Ipsum");
    const [enemyDesc, setEnemyDesc] = useState("Lorem Ipsum");

    const handleStartBattle = (e) => {
        e.preventDefault();
        if (!props.character.isDead() || !props.enemy.isDead()) {
            console.log("-- PLAYER TURN --");
            const playerAttack = props.character.physicalAttack(props.enemy)
            setEnemyHP(enemyHP - playerAttack);
            setCharDesc("You deal "+ playerAttack + " damage");
            console.log("-- ENEMY TURN --");
            const enemyAttack = props.enemy.physicalAttack(props.character);
            setCharacterHP(characterHP - enemyAttack);
            setEnemyDesc("Enemy deals "+ enemyAttack + " damage");
        }
    }
    
    return (
        <div>
            <h1 className='text-5xl mb-12 p-6 text-teal-400 text-center'>Mern Dungeon</h1>
            <div className='grid grid-cols-2 mb-8'>
                <div>
                    <img className="w-2/3 mx-auto" src={props.character.portrait} alt={props.character.altText}></img>
                    <p className='text-3xl mb-4 text-teal-200 text-center'>You have {characterHP} HP.</p>
                    <p className='text-3xl mb-4 text-teal-200 text-center'> {charDesc} </p>
                </div>
                <div>
                    <img className="w-2/3 mx-auto" src={props.enemy.portrait} alt={props.enemy.altText}></img>
                    <p className='text-3xl mb-4 text-teal-200 text-center'>The enemy has {enemyHP} HP.</p>
                    <p className='text-3xl mb-4 text-teal-200 text-center'> {enemyDesc} </p>
                </div>
            </div>
            <button className='block w-1/2 text-teal-200 text-2xl bg-blue-00 hover:bg-teal-700 transition-all ring-2 rounded-lg ring-teal-500 p-4 mx-auto'
                type="button"
                onClick={handleStartBattle}>
                    Battle!
            </button>
        </div>
    );
}
