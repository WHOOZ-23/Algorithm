function solution(arr, queries) {
    return queries.reduce((a, [s, e, k]) => {
        for(let i=s; i<=e; i++) {
            if (i%k===0) a[i]++;
        }
        return a;
    }, [...arr]);
}