function solution(my_string) {
    return my_string.replace(/[^0-9]/g, "").split("").map((x) => Number(x)).sort((a, b) => a-b);
}