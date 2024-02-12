function solution(n) {
    return Array.from({length:n}, (_, i) => n%(i+1)).indexOf(1)+1;
}