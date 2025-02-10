function solution(numbers) {
    const primes = new Set();

    prime("", numbers);

    return [...primes].length;

    function prime(num, remain) {
        if (num && isPrime(Number(num))) {
            primes.add(Number(num));
        }

        for (let i = 0; i < remain.length; i++) {
            prime(
                num + remain[i],
                remain.slice(0, i).concat(remain.slice(i + 1))
            );
        }
    }

    function isPrime(num) {
        if (num === 0 || num === 1) return false;
        if (num === 2) return true;

        for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
            if (num % i === 0) return false;
        }

        return true;
    }
}