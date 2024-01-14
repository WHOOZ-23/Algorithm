function solution(hp) {
    let attack = [5, 3, 1];
    let ant = [];
    
    attack.map((x) => {ant.push(~~(hp/x)); hp%=x;})
  
    return ant.reduce((a, b) => a+b);
}