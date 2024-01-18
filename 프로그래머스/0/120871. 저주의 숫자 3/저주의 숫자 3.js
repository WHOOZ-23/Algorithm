function solution(n) {
    return Array.from({length:200}, (x, i) => i+1).filter((x) => x%3 && !x.toString().includes("3"))[n-1];
}