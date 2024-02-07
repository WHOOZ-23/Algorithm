function solution(arr1, arr2) {
    const length1 = arr1.length;
    const length2 = arr2.length;
    const sum1 = arr1.reduce((a, b) => a+b);
    const sum2 = arr2.reduce((a, b) => a+b);
    
    return length1>length2 ? 1 : (length1<length2 ? -1 : (sum1<sum2 ? -1 : (sum1>sum2 ? 1 : 0)))
}