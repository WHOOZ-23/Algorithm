function solution(my_str, n) {
    let arr = my_str.split("");
    return Array(Math.ceil(arr.length/n)).fill([]).map(() => arr.splice(0, n).join(""));
}