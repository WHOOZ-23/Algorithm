function solution(storey) {
    let answer = 0;

    while (storey !== 0) {
        let n = storey % 10;
        let k = parseInt((storey % 100) / 10);

        if (10 - n < n) {
            answer = answer - n + 10;
            storey = (storey - n + 10) / 10;
        } else if (n === 5 && 5 <= k) {
            answer = answer - n + 10;
            storey = (storey - n + 10) / 10;
        } else {
            answer += n;
            storey = (storey - n) / 10;
        }
    }

    return answer;
}