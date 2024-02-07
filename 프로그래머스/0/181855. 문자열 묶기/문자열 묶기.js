function solution(strArr) {
    let cnt = Array(31).fill(0);
    strArr.map((x) => cnt[x.length]++);
    
    return Math.max(...cnt);
}