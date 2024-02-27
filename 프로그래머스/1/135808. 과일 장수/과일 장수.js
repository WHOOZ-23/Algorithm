function solution(k, m, score) {
    return score.sort((a, b) => b-a).reduce((a, b, i) => i%m===m-1 ? a+(b*m) : a, 0);
}