export default class Player {
    //constructor
    constructor(maxHealth, attack, magic, defense, mDefense, portrait, altText) {
        this.maxHealth = maxHealth;
        this.currentHealth = maxHealth;
        this.attack = attack;
        this.magic = magic;
        this.defense = defense;
        this.mDefense = mDefense;
        this.portrait = portrait;
        this.altText = altText;
    }
    //attack functions
    physicalAttack(target) {
        let rng = Math.floor(Math.random() * 11) 
        console.log("rng: "+ rng);
        console.log("Damage: "+ (this.attack - target.defense)); 
        if (rng < 2) return 0;
        else if (2 < rng && rng < 10) {
            return (this.attack - target.defense);
        }
        if (rng === 10) {
            return (this.attack - target.defense)*2;
        }
    }
    magicAttack(target) {
        let rng = Math.floor(Math.random() * 11) 
        if (rng < 2) return 0;
        else if (2 < rng && rng < 10) {
            return (this.magic - target.mDefense) - this.currentHealth;
        }
        if (rng === 10) {
            return (this.magic - target.mDefense)*2 - this.currentHealth;
        }
    }
    //heal function
    heal(amount) {
        this.currentHealth = this.currentHealth + amount;
        if (this.currentHealth > this.maxHealth) this.currentHealth = this.maxHealth;
    }
    //level up function
    levelup() {
        this.maxHealth = this.maxHealth + 5;
        this.currentHealth = this.currentHealth + 5;
        this.attack = this.attack + 1;
        this.magic = this.magic + 1;
        this.defense = this.defense + 1;
        this.mDefense = this.mDefense + 1;
    }
}