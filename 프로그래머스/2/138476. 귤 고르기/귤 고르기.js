function solution(k, tangerine) {
    const size = {};
    
    tangerine.map((x) => size[x] = (size[x] || 0) + 1);
    
    const sorted = Object.values(size).sort((a, b) => b-a);
    
    let cnt = 0;
    
    for(var i=0; i<sorted.length; i++) {
        cnt += sorted[i];
        
        if(k <= cnt) break;
    }
    
    return i+1;
}