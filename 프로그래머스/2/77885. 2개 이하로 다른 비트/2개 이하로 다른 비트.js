function solution(numbers) {
    return numbers.map((x) => {
        if (x % 2) {
            let num = 2;

            while ((x + 1) % (num * 2) === 0) {
                num *= 2;
            }

            return x + num / 2;
        }

        return x + 1;
    });
}