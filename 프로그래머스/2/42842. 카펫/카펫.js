function solution(brown, yellow) {
    const sum = brown + yellow;
    let x = 0;
    let y = 0;
    
    for(let i=3; i<=sum; i++) {
        if(sum%i === 0 && (i+sum/i)*2-4 === brown) {
            x = i;
            y = sum/i;
        }
    }
    
    return [x, y]
}