function solution(x) {
    return x%[...x.toString()].reduce((a, b) => +a + +b) ? false : true;
}