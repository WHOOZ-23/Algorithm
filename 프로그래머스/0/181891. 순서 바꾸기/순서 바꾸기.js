function solution(num_list, n) {
    let arr = num_list.splice(n);
    return arr.concat(num_list);
}