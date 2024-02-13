function solution(left, right) {
    const arr = Array.from({length:right-left+1}, (_, i) => i+left);
    
    return arr.reduce((a, b) => Number.isInteger(Math.sqrt(b)) ? a-b : a+b, 0);
}