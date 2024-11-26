function solution(s) {
    return s
        .slice(1, -1)
        .split("},{")
        .map((x) =>
            x
                .replace(/[{}]/g, "")
                .split(",")
                .map((y) => +y)
        )
        .sort((a, b) => a.length - b.length)
        .reduce((a, b) => [...a, ...b.filter((x) => a.indexOf(x) === -1)], []);
}