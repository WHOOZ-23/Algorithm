function solution(absolutes, signs) {
    return signs.map((x, i) => x ? absolutes[i] : -absolutes[i]).reduce((a, b) => a+b);
}