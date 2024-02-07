function solution(arr) {
    const power = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];
    const size = power.filter((x) => arr.length<=x)[0];
    
    return [...arr, ...Array(size).fill(0)].slice(0, size);
}