function solution(numbers) {
    const arr = numbers;
    const avg = arr.reduce((x, y) => x+y)/arr.length;
    
    return avg;
}