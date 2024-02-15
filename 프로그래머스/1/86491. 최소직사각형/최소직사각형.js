function solution(sizes) {
    sizes.map((x) => x.sort((a, b) => a-b));
    return Math.max(...sizes.map((x) => x[0])) * Math.max(...sizes.map((x) => x[1]));
}