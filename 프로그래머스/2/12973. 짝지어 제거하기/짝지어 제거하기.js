function solution(s){
    const arr = s.split("");
    const result = [];
    
    
    for(let i=0; i<s.length; i++) {
        result[result.length-1]===arr[i] ? result.pop() : result.push(arr[i]);
    }
    
    return result[0] ? 0 : 1;
}