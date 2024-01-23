function solution(n) {
    if(n%2) {
        return Array.from({length:n}, (x, i) => i+1).filter((x) => x%2).reduce((a, b) => a+b, 0);
    } else {
        return Array.from({length:n}, (x, i) => i+1).filter((x) => x%2===0).reduce((a, b) => a+b*b, 0);
    }
}