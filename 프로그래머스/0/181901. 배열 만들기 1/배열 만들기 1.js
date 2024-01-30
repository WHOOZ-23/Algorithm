function solution(n, k) {
    return Array(~~(n/k)).fill().map((_, i) => (i+1)*k);
}