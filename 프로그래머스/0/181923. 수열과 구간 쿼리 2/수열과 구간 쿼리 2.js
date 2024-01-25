function solution(arr, queries) {
    const list = [];
    
    queries.forEach(([s, e, k]) => {
        let result = arr.slice(s, e+1).filter((x) => x>k);
        list.push(result.length ? Math.min(...result) : -1);
    });
    
    return list;
}