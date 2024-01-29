function solution(q, r, code) {
    // return [...code].filter((x, i) => i%q===r).join("");
    return [...code].reduce((a, b, i) => i%q===r ? a+b : a, "");
}