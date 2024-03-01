function solution(n) {
    let arr = Array(n+1).fill(true);
    
    arr[0] = arr[1] = false;
    
    arr.forEach((_, i) => {
        if(arr[i]) {
            for(let j=i*i; j<=n; j+=i) {
                arr[j] = false;
            }
        }
    });
    
    return arr.filter((x) => x).length;
}