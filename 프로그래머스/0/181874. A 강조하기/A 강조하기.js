function solution(myString) {
    return [...myString.toLowerCase()].map((x) => x==='a' ? x.toUpperCase() : x).join("");
}