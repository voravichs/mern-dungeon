import React, { useState } from 'react';

export default function Battle(props) {
    const [characterHP, setCharacterHP ] = useState(props.character.currentHealth);
    const [enemyHP, setEnemyHP ] = useState(props.enemy.currentHealth);

    const handleStartBattle = (e) => {
        if (props.character.currentHealth > 0 || props.enemy.currentHealth > 0) {
            setEnemyHP(enemyHP - props.character.physicalAttack(props.enemy));
            setCharacterHP(characterHP - props.enemy.physicalAttack(props.character));
        }
    }
    
    return (
        <div>
            <h1 className='text-5xl mb-12 text-yellow-100 text-center'>Mern Dungeon</h1>
            <div className='grid grid-cols-2 mb-8'>
                <div>
                    <img className="w-2/3 mx-auto" src={props.character.portrait} alt={props.character.altText}></img>
                    <p className='text-3xl mb-4 text-yellow-100 text-center'>You have {characterHP} HP.</p>
                </div>
                <div>
                <img className="w-2/3 mx-auto" src={props.enemy.portrait} alt={props.enemy.altText}></img>
                    <p className='text-3xl mb-4 text-yellow-100 text-center'>The enemy has {enemyHP} HP.</p>
                </div>
            </div>
            <button className='block w-1/2 text-yellow-100 text-2xl bg-emerald-600 hover:bg-emerald-700 transition-all ring-2 rounded-lg ring-emerald-500 p-4 mx-auto'
                type="button"
                onClick={handleStartBattle}>
                    Battle!
            </button>
        </div>
    );
}
