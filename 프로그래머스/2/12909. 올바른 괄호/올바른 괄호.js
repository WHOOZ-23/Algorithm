function solution(s){
    let result = [];
    
    for(let c of s) {
        if(c==='(') {
            result.push(c);
        } else {
            if(result[result.length-1]==='(') result.pop();
            else result.push(c);
        }
    }
    
    return result.length===0;
}