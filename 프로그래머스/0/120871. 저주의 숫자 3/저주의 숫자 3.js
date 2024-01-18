function solution(n) {
    return Array.from({length:n*3}, (_, i) => i+1).filter((x) => x%3 && !x.toString().includes("3"))[n-1];
}