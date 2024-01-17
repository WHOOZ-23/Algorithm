function solution(numbers) {
    let num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  
    num.forEach((x, i) => numbers = numbers.replaceAll(x, i));
  
    return +numbers;
}