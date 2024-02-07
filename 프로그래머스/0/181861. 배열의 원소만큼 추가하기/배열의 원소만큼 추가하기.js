function solution(arr) {
    let list = []
    
    arr.forEach((x) => {
        for(let i=0; i<x; i++) {
            list.push(x);
        }
    });
    
    return list;
}