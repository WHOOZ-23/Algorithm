function solution(my_string, s, e) {
    let str = [...my_string];
    str.splice(s, e-s+1, ...str.slice(s, e+1).reverse());
    return str.join("");
}