function solution(number) {
    return [...number].reduce((a, b) => a+Number(b), 0) % 9;
}