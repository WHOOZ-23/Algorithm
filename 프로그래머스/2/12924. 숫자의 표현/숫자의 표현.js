function solution(n) {
    let sum = 0;
    let cnt = 1;
    
    for(let i=1; i<=Math.ceil(n/2); i++) {
        for(let j=i; j<n; j++) {
            sum += j;
            
            if(n<sum) {
                sum = 0;
                break;
            }
            
            if(sum===n) {
                cnt++;
                sum = 0;
                break;
            }
        }
    }
    
    return cnt;
}