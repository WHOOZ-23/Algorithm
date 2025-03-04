function solution(n, w, num) {
    let arr = Array.from({ length: n % w }, (_, i) => i + 1);
    let topline = Math.ceil(n / w);
    let line = Math.ceil(num / w);
    let answer = 0;

    if (w === 1) return n - num + 1;

    if (w !== 1 && n % w === 0) return topline - line + 1;

    for (let i = 0; i < w - (n % w); i++) {
        arr.push(0);
    }

    if (!(topline % 2)) {
        arr = arr.reverse();
    }

    answer = line % 2 ? arr[(num - 1) % w] : arr[w - ((num - 1) % w) - 1];

    return answer ? topline - line + 1 : topline - line;
}