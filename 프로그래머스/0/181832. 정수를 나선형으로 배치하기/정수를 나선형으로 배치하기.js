function solution(n) {
    let arr = [];
    
    for(let i=0; i<n; i++) {
        arr.push(Array(n).fill(0));
    }
    
    let i = 0;
    let j = 0;
    arr[i][j] = 1;
    let a = 2;
    
    while(a<=n*n) {
        while(j+1<n && arr[i][j+1]===0) {
            j++;
            arr[i][j] = a;
            a++;
        }
        
        while(i+1<n && arr[i+1][j]===0) {
            i++;
            arr[i][j] = a;
            a++;
        }
        
        while(j-1>=0 && arr[i][j-1]===0) {
            j--;
            arr[i][j] = a;
            a++;
        }
        
        while(i-1>=0 && arr[i-1][j]===0) {
            i--;
            arr[i][j] = a;
            a++;
        }
    }
    
    return arr;
}