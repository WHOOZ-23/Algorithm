function solution(arr, flag) {
    return arr.reduce((a, b, i) => flag[i] ? [...a, ...Array(b*2).fill(b)] : a.slice(0, -b), []);
}