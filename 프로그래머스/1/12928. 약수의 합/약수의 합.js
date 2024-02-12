function solution(n) {
    return Array.from({length:n}, (_, i) => i+1).reduce((a, b) => n%b===0 ? a+b : a, 0);
}