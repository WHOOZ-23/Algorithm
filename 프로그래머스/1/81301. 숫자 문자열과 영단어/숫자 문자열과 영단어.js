function solution(s) {
    const n = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    n.map((x, i) => s = s.replaceAll(x, i));
    
    return +s;
}