function solution(t, p) {
    let arr = [];
    
    for(let i=0; i<t.length-p.length+1; i++) {
        arr.push([...t].splice(i, p.length).join(""));
    }
    
    return arr.filter((x) => x<=+p).length;
}