function solution(s) {
    return [...new Set([...s])].filter((x) => s.indexOf(x)===s.lastIndexOf(x)).sort().join("");
}