function solution(array, n) {
    let arr = array.sort((a, b) => a-b).map((x) => Math.abs(n-x));
    return array[arr.indexOf(Math.min(...arr))];
}