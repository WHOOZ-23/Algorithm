function solution(s){
    let result = 0;
    
    if(s[0]===')') return false;
    
    for(let c of s) {
        if(result<0) return false;
        
        if(c==='(') result++;
        if(c===')') result--;
    }
    
    return !result;
}