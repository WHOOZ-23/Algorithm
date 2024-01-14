function solution(n) {    
    return Array.from(n.toString()).reduce((a, b) => a + Number(b), 0);
}