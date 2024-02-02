function solution(num_list) {
    const odd = num_list.reduce((a, b, i) => i%2 ? a+b : a, 0);
    const even = num_list.reduce((a, b, i) => i%2 ? a : a+b, 0);
    return Math.max(odd, even);
}