function solution(a, b, n) {
    let arr = [];
    
    while(n>=a) {        
        arr.push(~~(n/a)*b);
        n = ~~(n/a)*b+n%a;
    }
    
    return arr.reduce((a, b) => a+b);
}