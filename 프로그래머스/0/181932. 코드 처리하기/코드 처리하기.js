function solution(code) {
    let ret = "";
    let mode = 0;
    
    [...code].forEach((x, i) => {
        if(x==="1") mode = mode===0 ? 1 : 0;
        if(x!=="1" && i%2===mode) ret += x;
    })
    
    return ret.length>0 ? ret : "EMPTY";
}