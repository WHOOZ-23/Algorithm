function solution(k, tangerine) {
    let cnt = 0;
    const size = {};
    
    tangerine.map((x) => size[x] = (size[x] || 0) + 1);
    
    const sorted = Object.values(size).sort((a, b) => b-a);
    
    for(let s of sorted) {
        cnt++;
        
        if(s < k) k -= s;
        else break;
    }
    
    return cnt;
}