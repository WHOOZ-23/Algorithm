function solution(code) {
    let ret = "";
    let mode = 0;
    
    [...code].reduce((acc, cur, i) => {
        if(mode===0) {
            if(cur==="1") mode = 1;
            else if(i%2===0) ret += cur;
        } else {
            if(cur==="1") mode = 0;
            else if(i%2) ret += cur;
        }
        return acc;
    }, [])
    
    return ret.length>0 ? ret : "EMPTY";
}