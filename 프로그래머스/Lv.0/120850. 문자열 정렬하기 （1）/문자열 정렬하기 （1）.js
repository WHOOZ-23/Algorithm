function solution(my_string) {
    return my_string.match(/\d/g).map((x) => Number(x)).sort((a, b) => a-b);
}