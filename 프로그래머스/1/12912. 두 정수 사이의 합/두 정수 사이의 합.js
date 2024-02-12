function solution(a, b) {
    return Array.from({length:Math.abs(a-b)+1}, (_, i) => i+Math.min(a, b)).reduce((a, b) => a+b);
}