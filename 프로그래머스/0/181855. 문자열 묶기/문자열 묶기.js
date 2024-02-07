function solution(strArr) {
    const cnt = strArr.map((x) => x.length);
    const result = {}
    
    cnt.forEach((x) => result[x] = (result[x] || 0) + 1);
    
    return Math.max(...Object.values(result));
}