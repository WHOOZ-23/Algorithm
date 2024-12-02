function solution(arr) {
    let answer = arr[0];

    for (let i = 0; i < arr.length; i++) {
        answer = lcm(answer, arr[i]);
    }

    return answer;
}

function gcd(a, b) {
    if (a % b === 0) {
        return b;
    } else {
        return gcd(b, a % b);
    }
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}