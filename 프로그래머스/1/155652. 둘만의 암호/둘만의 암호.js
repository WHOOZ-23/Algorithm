function solution(s, skip, index) {
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"].filter((x) => !skip.includes(x));
    
    return [...s].map((x) => alphabet[(alphabet.indexOf(x)+index) % alphabet.length]).join("");
}