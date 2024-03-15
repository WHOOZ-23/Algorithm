function solution(n) {
    let cnt = 0;
    let i = 0;
    
    while(0<n) {
        i++;
        if(n%i===0) cnt++;
        n -= i;
    }
    
    return cnt;
}