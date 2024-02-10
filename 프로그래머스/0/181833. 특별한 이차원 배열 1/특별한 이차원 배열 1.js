function solution(n) {
    const arr = Array.from(Array(n), (_, i) => Array(n).fill(0));
    
    for(let i=0; i<n; i++) arr[i][i]++;
    
    return arr;
}