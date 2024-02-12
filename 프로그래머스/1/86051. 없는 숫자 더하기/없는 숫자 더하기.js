function solution(numbers) {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    return arr.reduce((a, b) => !numbers.includes(b) ? a+b : a, 0);
}