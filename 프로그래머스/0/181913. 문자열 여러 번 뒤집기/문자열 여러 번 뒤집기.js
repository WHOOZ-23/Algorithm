function solution(my_string, queries) {
    let str = [...my_string];
    
    queries.forEach(([s, e]) => {
        str.splice(s, e-s+1, ...str.slice(s, e+1).reverse());
    });
    
    return str.join("");
}