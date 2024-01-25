function solution(array) {
    const result = {}
    
    if(array.length===1) return array[0];
    
    array.forEach((x) => result[x] = (result[x] || 0)+1);
    
    const values = Object.values(result);
    
    if(values.indexOf(Math.max(...values)) != values.lastIndexOf(Math.max(...values))) return -1;
    
    return +(Object.keys(result).find(key => result[key] === Math.max(...values)));
}