function solution(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let num = BigInt(numbers[i]);

        if ((num & 1n) === 0n || (num & 2n) === 0n) {
            numbers[i] = num + 1n;
            continue;
        }

        let index = 2n;

        while (((1n << index) & num) !== 0n) {
            index++;
        }

        numbers[i] = (num | (1n << index)) - (1n << (index - 1n));
    }

    return numbers.map(Number);
}