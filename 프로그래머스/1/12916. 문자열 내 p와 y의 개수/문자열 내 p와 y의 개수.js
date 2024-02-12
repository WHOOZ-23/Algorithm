function solution(s) {
    return [...s.toLowerCase()].reduce((a, b) => b==="p" ? a+1 : (b==="y" ? a-1 : a), 0) ? false : true;
}