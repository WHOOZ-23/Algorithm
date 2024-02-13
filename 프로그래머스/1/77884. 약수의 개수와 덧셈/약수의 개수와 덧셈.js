function solution(left, right) {
    const arr = Array.from({length:right-left+1}, (_, i) => i+left);
    const cnt = arr.map((x) => Array.from({length:x}, (_, i) => i+1).filter((y) => x%y===0).length);
    
    return cnt.reduce((a, b, i) => b%2 ? a-arr[i] : a+arr[i], 0);
}