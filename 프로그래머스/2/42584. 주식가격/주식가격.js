function solution(prices) {
    const answer = Array.from(
        { length: prices.length },
        (_, i) => prices.length - i - 1
    );
    const info = [];

    for (let i = 0; i < prices.length; i++) {
        while (info.length && prices[i] < info[info.length - 1][0]) {
            answer[info[info.length - 1][1]] = i - info[info.length - 1][1];
            info.pop();
        }

        info.push([prices[i], i]);
    }

    return answer;
}