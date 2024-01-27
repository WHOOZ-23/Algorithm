function solution(n, arr = []) {
    arr.push(n);
    if (n===1) return arr;
    if (n%2) return solution(3*n+1, arr);
    return solution(n/2, arr);
}