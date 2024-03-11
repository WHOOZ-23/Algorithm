function solution(s){
    let arr = [...s];
    let result = [];
    
    arr.forEach((x) => {
        if(x==='(') {
            result.push(x);
        } else {
            if(result[result.length-1]==='(') result.pop();
            else result.push(x);
        }
    });    
    
    return result.length===0 ? true : false;
}