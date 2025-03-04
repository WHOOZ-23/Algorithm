function solution(n, w, num) {
    let arr = [];
    let box = 1;
    let check = 1;
    let answer = 0;

    for (let i = 0; i < Math.floor(n / w); i++) {
        const line1 = Array.from({ length: w }, (_, i) => box + i);

        check % 2 ? arr.push(line1) : arr.push(line1.reverse());

        box += w;
        check++;
    }

    const line2 = Array.from({ length: n % w }, (_, i) => box + i);

    for (let j = 0; j < w - (n % w); j++) {
        line2.push(0);
    }

    check % 2 ? arr.push(line2) : arr.push(line2.reverse());
    arr = arr.reverse();
    arr.map((x, i) => {
        if (x.includes(num)) {
            if (arr[0][x.indexOf(num)] !== 0) {
                answer = i + 1;
            } else {
                answer = i;
            }
        }
    });

    return answer;
}