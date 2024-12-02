function solution(arr) {
    let answer;

    for (let i = 0; i < arr.length - 1; i++) {
        let gcd = getGCD(arr[i], arr[i + 1]);
        answer = Math.floor((arr[i] * arr[i + 1]) / gcd);
        arr[i + 1] = answer;
    }

    return answer;
}

function getGCD(a, b) {
    if (a % b === 0) {
        return b;
    } else {
        return getGCD(b, a % b);
    }
}