function solution(sides) {
    let arr = [];
    let max = Math.max(...sides)
    let min = Math.min(...sides)
    
    for(let i=max-min+1; i<=max; i++) {
        arr.push(i);
    }
    
    for(let j=max+1; j<max+min; j++) {
        arr.push(j);
    }
    
    return arr.length;
}