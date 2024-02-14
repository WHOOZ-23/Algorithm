function solution(t, p) {
    return [...t].reduce((a, b, i) => i<=t.length-p.length ? [...a, [...t].splice(i, p.length).join("")] : a, []).filter((x) => x<=+p).length;
}