function solution(n) {
    const digits = ["4", "1", "2"];
    let result = "";

    while (n > 0) {
        result = digits[n % 3] + result;
        n = Math.floor((n - 1) / 3);
    }

    return result;
}