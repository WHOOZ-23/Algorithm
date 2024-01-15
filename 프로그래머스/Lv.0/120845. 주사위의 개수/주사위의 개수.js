function solution(box, n) {
    return box.map((x) => ~~(x/n)).reduce((a, b) => (a, a*b), 1);
}