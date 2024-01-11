function solution(numbers) {
    return numbers.reduce((x, y) => [...x, y*2], []);
}