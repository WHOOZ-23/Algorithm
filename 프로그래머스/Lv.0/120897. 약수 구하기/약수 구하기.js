function solution(n) {
    return Array.from({length:n}, (x, i) => i+1).filter((x) => n%x===0);
}