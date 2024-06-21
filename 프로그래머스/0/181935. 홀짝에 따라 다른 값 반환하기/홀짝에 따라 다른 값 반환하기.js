function solution(n) {
    let result = 0;
    
    if(n%2) {
        for(let i=1; i<=n; i+=2) {
            result += i;
        }
        
        return result;
    } else {
        for(let i=2; i<=n; i+=2) {
            result += i*i;
        }
        
        return result;
    }
}