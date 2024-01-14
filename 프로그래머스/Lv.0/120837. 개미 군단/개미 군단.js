function solution(hp) {
    let ant = 0;
    
    if(hp>=5) {
        ant += ~~(hp/5);
        hp %= 5;
    }
    if(hp>=3) {
        ant += ~~(hp/3);
        hp %= 3;
    }
    if(hp>=1) {
        ant += hp;
    }
        
    return ant;
}