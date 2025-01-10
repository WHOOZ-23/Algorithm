function solution(n, k) {
    let answer = 0;
    const arr = n.toString(k).split(0);

    for (const a of arr) {
        if (a === "") continue;
        if (isPrime(+a)) answer++;
    }

    return answer;
}

function isPrime(n) {
    if (n === 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}