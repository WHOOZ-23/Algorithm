function solution(n) {
    const result = [1, 1];
    
    for(let i=2; i<=n; i++) {
        result.push((result[i-2] + result[i-1]) % 1234567);
    }
    
    return result[n];
}