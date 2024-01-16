function solution(my_string) {
    return my_string.split(/\D/g).reduce((a, b) => (a, a+Number(b)), 0);
}