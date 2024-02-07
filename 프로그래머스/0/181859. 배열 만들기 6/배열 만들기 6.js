function solution(arr) {
    const list = arr.reduce((a, b, i) => a[a.length-1]===b ? a.slice(0, -1) : [...a, b], []);
    return list.length ? list : [-1];
}