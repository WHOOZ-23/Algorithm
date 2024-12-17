function solution(str1, str2) {
    let result1 = [];
    let result2 = [];

    str1 = str1.toUpperCase();
    str2 = str2.toUpperCase();

    for (let i = 0; i < str1.length - 1; i++) {
        result1.push(str1.substring(i, i + 2));
    }

    for (let j = 0; j < str2.length - 1; j++) {
        result2.push(str2.substring(j, j + 2));
    }

    result1 = result1.filter((x) => /[a-z][A-Z]/gi.test(x));
    result2 = result2.filter((x) => /[a-z][A-Z]/gi.test(x));

    if (result1.length === 0 && result2.length === 0) {
        return 65536;
    }

    let intersection = 0;
    let union = 0;

    for (let i = 0; i < result1.length; i++) {
        if (result2.includes(result1[i])) {
            intersection++;
            result2.splice(result2.indexOf(result1[i]), 1);
        }

        union++;
    }

    union += result2.length;

    return Math.floor((intersection / union) * 65536);
}