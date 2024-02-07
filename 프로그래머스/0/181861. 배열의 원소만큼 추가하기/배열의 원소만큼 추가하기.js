function solution(arr) {
    return arr.reduce((a, b) => [...a, ...Array(b).fill(b)], []);
}