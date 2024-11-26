function solution(s) {
    const answer = {};

    for (const number of s.replace(/[{}]/g, "").split(",")) {
        answer[number] = (answer[number] || 0) + 1;
    }

    return Object.entries(answer)
        .sort((a, b) => b[1] - a[1])
        .map((x) => +x[0]);
}