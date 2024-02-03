function solution(arr) {
    return arr.map((x) => 50<=x ? (x%2 ? x : x/2) : (x%2 ? x*2 : x));
}