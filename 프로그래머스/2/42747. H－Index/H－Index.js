function solution(citations) {
    return citations.sort((a, b) => b - a).filter((x, i) => i + 1 <= x).length;
}