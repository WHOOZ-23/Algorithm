function solution(n) {
    return Array.from({length:n-3}, (_, i) => i+4).filter((x) => x%2===0 || x%3===0 || (x>7 && (x%5===0 || x%7===0))).length;
}