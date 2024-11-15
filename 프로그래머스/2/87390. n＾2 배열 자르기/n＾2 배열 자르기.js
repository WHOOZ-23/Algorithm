function solution(n, left, right) {
    let arr = [];

    for (let i = left; i <= right; i++) {
        arr.push(Math.max(parseInt(i / n), i % n) + 1);
    }

    return arr;
}