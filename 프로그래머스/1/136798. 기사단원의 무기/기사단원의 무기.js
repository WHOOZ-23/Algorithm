function solution(number, limit, power) {
    let arr = Array(number).fill(0);
    let sum = 0;
    
    for(let i=1; i<=number; i++) {
        for(let j=i; j<=number; j=j+i) {
            arr[j-1] += 1;
        }
    }
    
    for(let i=0; i<number; i++) {
        if(limit<arr[i]) sum += power;
        else sum += arr[i];
    }
    
    return sum;
}