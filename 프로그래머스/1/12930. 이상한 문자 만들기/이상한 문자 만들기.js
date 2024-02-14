function solution(s) {
    return s.split(" ").map((x) => [...x].map((y, i) => i%2 ? y.toLowerCase() : y.toUpperCase()).join("")).join(" ");
}