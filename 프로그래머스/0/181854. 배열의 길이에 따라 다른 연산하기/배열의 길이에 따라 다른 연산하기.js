function solution(arr, n) {
    return arr.length%2 ? arr.map((x, i) => i%2===0 ? x+n : x) : arr.map((x, i) => i%2 ? x+n : x);
}