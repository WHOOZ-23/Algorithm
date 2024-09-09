function solution(bandage, health, attacks) {
    const attacksObj = {};
    const maxHealth = health;
    let heal = 0;
    
    attacks.map(([a, b]) => attacksObj[a] = b);
    
    for(let i=1; i<=attacks[attacks.length-1][0]; i++) {
        if(attacksObj[i]) {
            health -= attacksObj[i];
            
            if(health <= 0) return -1;
            
            heal = 0;
        } else {
            heal++;
            
            if(maxHealth < health+bandage[1]) {
                health = maxHealth;
            } else {
                health += bandage[1];
            }

            if(heal === bandage[0]) {
                if(maxHealth < health+bandage[2]) {
                    health = maxHealth;
                } else {
                    health += bandage[2];
                }
                heal = 0;
            }
        }
        
    }
    
    return health;
}