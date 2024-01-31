function solution(arr, intervals) {
    const [[a1 ,b1], [a2, b2]] = intervals;
    const arr1 = [...arr].slice(a1, b1+1);
    const arr2 = [...arr].slice(a2, b2+1);
    
    return [...arr1, ...arr2];
}