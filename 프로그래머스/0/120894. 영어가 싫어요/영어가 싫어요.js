function solution(numbers) {
    return +["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"].reduce((a, b, i) => a.replaceAll(b, i), numbers);
}