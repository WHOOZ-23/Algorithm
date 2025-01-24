function solution(numbers) {
    numbers = numbers
        .map((x) => x.toString())
        .sort((a, b) => a + b - (b + a))
        .reverse();

    return numbers[0] === "0" ? "0" : numbers.join("");
}