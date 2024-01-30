function solution(arr, idx) {
    return arr.map((x, i) => i<idx ? 0 : x).indexOf(1);
}