function solution(N, stages) {
    let failure = Array(N).fill(0);
    let failureRate = [];
    let rateSort = new Map();
    
    stages.map((x) => {
        if(x<=N) failure[x-1]++;
    });
    
    let cnt = stages.length;
    
    for(let i=0; i<failure.length; i++) {
        failureRate.push(failure[i] / cnt);
        cnt = cnt - failure[i];
    }
    
    failureRate.forEach((x, i) => {
        rateSort.set(i+1, x);
    });
    
    return [...rateSort].sort((a, b) => b[1]-a[1]).map((x) => x[0]);
}