function solution(arr, k) {
    return [...[...new Set(arr)].slice(0, k), ...Array(k).fill(-1)].slice(0, k);
}