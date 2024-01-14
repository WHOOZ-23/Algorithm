function solution(n) {
    return Array(n).fill(1).map((x, i) => x+i).filter((y) => n%y===0).length;
}