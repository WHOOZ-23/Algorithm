function solution(arr1, arr2) {
    const length1 = arr1.length;
    const length2 = arr2.length;
    
    if(length1 > length2) return 1;
    else {
        if(length1 < length2) return -1;
        
        if(length1===length2) {
            const sum1 = arr1.reduce((a, b) => a+b);
            const sum2 = arr2.reduce((a, b) => a+b);
            
            if(sum1 < sum2) return -1;
            else if(sum1 > sum2) return 1;
            else return 0;
        }
    }
}