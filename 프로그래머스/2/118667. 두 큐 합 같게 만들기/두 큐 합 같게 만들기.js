function solution(queue1, queue2) {
    const queue = [...queue1, ...queue2];
    let sum1 = queue1.reduce((a, c) => a + c, 0);
    let sum2 = queue2.reduce((a, c) => a + c, 0);
    let goal = (sum1 + sum2) / 2;
    let [start, end, answer] = [0, queue1.length, 0];

    if ((sum1 + sum2) % 2 !== 0) return -1;

    while (start < queue.length && end < queue.length * 2) {
        if (sum1 === goal) return answer;

        if (sum1 < goal) {
            sum1 += queue[end % queue.length];
            end++;
        } else {
            sum1 -= queue[start % queue.length];
            start++;
        }

        answer++;
    }

    return -1;
}