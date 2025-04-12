function solution(arrayA, arrayB) {
    let answer = 0;
    let [a, isdivide1] = [arrayA[0], false];
    let [b, isdivide2] = [arrayB[0], false];

    for (let i = 1; i < arrayA.length; i++) {
        a = gcd(a, arrayA[i]);
        b = gcd(b, arrayB[i]);
    }

    for (let j = 0; j < arrayA.length; j++) {
        if (arrayA[j] % b === 0) {
            b = 0;
            isdivide2 = true;
        }

        if (arrayB[j] % a === 0) {
            a = 0;
            isdivide1 = true;
        }
    }

    if (isdivide1 && 1 < b) {
        answer = b;
    } else if (isdivide2 && 1 < a) {
        answer = a;
    } else if (!isdivide1 && !isdivide2) {
        answer = Math.max(a, b);
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