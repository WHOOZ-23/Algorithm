function solution(n) {
    let arr = [];
    let i = 2;
  
    while(n!==1) {
        if(n%i===0) {
            arr.push(i);
            n /= i;
        } else {
            i++
        };
    }
    
    return [...new Set(arr)].sort((a, b) => a-b);
}