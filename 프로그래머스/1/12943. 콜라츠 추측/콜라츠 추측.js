function solution(num) {
    let cnt = 0;
    
    while(num!==1 && cnt!==500) {
        num%2 ? num=num*3+1 : num/=2;
        cnt++;
    }
    
    return cnt!==500 ? cnt : -1;
}