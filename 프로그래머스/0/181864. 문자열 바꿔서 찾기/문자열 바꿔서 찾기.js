function solution(myString, pat) {
    return +(myString.includes([...pat].map((x) => x==='A' ? 'B' : 'A').join("")));
}