function solution(num) {
    let cnt = 0;
    
    while(num!==1) {
        if(num%2) {
            num=num*3+1;
            cnt++;
        } else {
            num/=2;
            cnt++;
        }
        
        if(cnt===500) return -1;
    }
    
    return cnt;
}