function solution(num, total) {
    const a = ((2*total/num)-num+1)/2;
    return Array(num).fill().map((_, i) => i+a);
}