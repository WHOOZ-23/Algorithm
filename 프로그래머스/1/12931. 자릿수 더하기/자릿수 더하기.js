function solution(n) {
    return n.toString().split("").reduce((a, b) => +a + +b, 0);
}