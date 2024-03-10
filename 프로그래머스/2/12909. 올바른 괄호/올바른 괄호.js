function solution(s){
    let result = 0;
    
    for(let c of s) {
        result += (c==='(' ? 1 : -1);
        
        if(result<0) return false;
    }
    
    return result===0 ? true : false;
}