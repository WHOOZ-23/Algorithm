function solution(numbers) {
    numbers = numbers.map((x) => x.toString()).sort((a, b) => b + a - (a + b));

    return numbers[0] === "0" ? "0" : numbers.join("");
}