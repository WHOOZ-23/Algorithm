function solution(s) {
    const n = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    return Number(n.reduce((a, c, i) => a.replaceAll(new RegExp(c, 'g'), i), s));
}