function solution(word) {
    return word.split("").reduce((a, b, i) => a + ["A", "E", "I", "O", "U"].indexOf(b) * [781, 156, 31, 6, 1][i] + 1, 0);
}