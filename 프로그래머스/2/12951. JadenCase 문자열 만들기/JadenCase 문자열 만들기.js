function solution(s) {
    return s.split(" ").map((x) => [...x].reduce((a, b, i) => i===0 ? a+b.toUpperCase() : a+b.toLowerCase(), "")).join(" ");
}