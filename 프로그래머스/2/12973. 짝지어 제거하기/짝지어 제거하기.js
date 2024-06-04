function solution(s){
    const result = [];
    
    
    for(let i=0; i<s.length; i++) {
        result[result.length-1]===s[i] ? result.pop() : result.push(s[i]);
    }
    
    return result[0] ? 0 : 1;
}