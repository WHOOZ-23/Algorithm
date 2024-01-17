function solution(s) {
    return [...s].filter((x) => ![...new Set([...s].filter((x, i) => s.indexOf(x) !== i))].includes(x)).sort().join("");
}