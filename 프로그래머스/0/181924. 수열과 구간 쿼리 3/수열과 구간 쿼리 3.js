function solution(arr, queries) {
    const switches = ([i, j]) => {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        return arr;
    }
    
    queries.map((x) => switches(x));
    return arr;
}