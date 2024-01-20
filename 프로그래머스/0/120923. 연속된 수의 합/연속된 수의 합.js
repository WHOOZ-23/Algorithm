function solution(num, total) {
    return Array(num).fill().map((x, i) => i+Math.ceil(total/num)-~~(num/2));
}