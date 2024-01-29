function solution(my_string, m, c) {
    let arr = [];
    let str = [...my_string];
    
    for(let i=0; i<my_string.length/m; i++) {
        arr.push(str.splice(0, m));
    }
    
    return arr.map((x, i) => x[c-1]).join("");
}