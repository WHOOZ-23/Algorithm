function solution(s) {
    const answer = {};

    s.replace(/[{}]/g, "")
        .split(",")
        .map((x) => (answer[x] = (answer[x] || 0) + 1));

    return Object.entries(answer)
        .sort((a, b) => b[1] - a[1])
        .map((x) => +x[0]);
}