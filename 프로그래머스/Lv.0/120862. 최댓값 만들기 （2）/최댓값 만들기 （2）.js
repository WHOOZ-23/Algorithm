function solution(numbers) {
    numbers.sort((a, b) => a-b);
    let max1 = numbers[0]*numbers[1];
    numbers.sort((a, b) => b-a);
    let max2 = numbers[0]*numbers[1];
    
    return max1 > max2 ? max1 : max2;
}