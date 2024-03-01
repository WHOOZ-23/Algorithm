function solution(N, stages) {
    let failureRate = [];
    
    for(let i=1; i<=N; i++) {
        let success = stages.filter((x) => i<=x).length;
        let failure = stages.filter((x) => x===i).length;
        
        failureRate.push([i, failure/success]);
    }
    
    return failureRate.sort((a, b) => b[1]-a[1]).map((x) => x[0]);
}