function solution(n, m, section) {
    let cnt = 0;
    let paint = 0;
    
    for(let s of section) {
        if(paint < s) {
            cnt++;
            paint = s+m-1;
        }
    }
    
    return cnt;
}