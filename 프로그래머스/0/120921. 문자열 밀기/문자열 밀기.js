function solution(A, B) {
    if(A===B) return 0;
    
    let arr = A.split("");
    let cnt = 0;
    
    for(let i=0; i<arr.length; i++) {
        let temp = arr.pop();
        arr.unshift(temp);
        cnt++;
        if(arr.join("")===B) return cnt;
    }
    
    return -1;
}