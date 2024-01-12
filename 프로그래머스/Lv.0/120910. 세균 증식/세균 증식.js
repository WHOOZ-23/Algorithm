function solution(n, t) {
    let i = 0;
    
    while(i<t) {
        n *= 2;
        i++;
    }
    
    return n;
}