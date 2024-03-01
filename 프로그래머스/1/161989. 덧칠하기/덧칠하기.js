function solution(n, m, section) {
    let arr = Array(n+1).fill(true);
    let cnt = 0;
    
    section.map((x) => arr[x]=false);
    
    arr.forEach((_, i) => {
        if(!arr[i]) {
            for(let j=i; j<i+m; j++) {
                arr[j] = true;
            }
            cnt++;
        }
    });
    
    return cnt;
}