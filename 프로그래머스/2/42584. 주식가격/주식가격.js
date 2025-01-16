function solution(prices) {
    const answer = Array(prices.length).fill(0);
    const info = [];

    for (let i = 0; i < prices.length; i++) {
        for (const [price, time] of info) {
            answer[time]++;
        }

        while (info.length && prices[i] < info[info.length - 1][0]) {
            info.pop();
        }

        info.push([prices[i], i]);
    }

    return answer;
}