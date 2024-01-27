function solution(n) {
    let arr = [n];
    
    while(n!==1) {
        arr.push(n%2 ? n=3*n+1 : n/=2);
    }
    
    return arr;
}