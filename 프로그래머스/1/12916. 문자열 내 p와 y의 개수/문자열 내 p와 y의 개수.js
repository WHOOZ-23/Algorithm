function solution(s) {
    let p = 0, y = 0;
    
    [...s.toLowerCase()].map((x) => x==="p" ? p++ : (x==="y" ? y++ : 0));
    
    return p===y;
}