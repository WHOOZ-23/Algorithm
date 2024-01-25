function solution(arr, queries) {
    queries.forEach(([x, y]) => [arr[x], arr[y]] = [arr[y], arr[x]]);
    return arr;
}