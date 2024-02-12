function solution(arr) {
    const result = arr.filter((x) => x!==Math.min(...arr));
    return result.length ? result : [-1];
}