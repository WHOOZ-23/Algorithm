function solution(arr, query) {
    query.map((x, i) => i%2 ? arr.splice(0, x) : arr.splice(x+1));
    return arr;
}