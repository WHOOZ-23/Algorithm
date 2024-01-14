function solution(array, n) {
    let cnt = 0;
    
    array.map((x) => {
        if(x===n) cnt++
    });
    
    return cnt;
}