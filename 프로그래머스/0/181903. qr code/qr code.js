function solution(q, r, code) {
    return [...code].map((x, i) => i%q===r ? x : "").join("");
}