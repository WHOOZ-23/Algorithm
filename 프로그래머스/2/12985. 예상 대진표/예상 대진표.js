function solution(n, a, b) {
    let answer = 1;
    
    if(b < a) [a, b] = [b, a];
    
    while(b-a !== 1 || b%2 === 1) {
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
        answer++;
    }
    
    return answer;
}