function solution(x, y, n) {
    const queue = [];
    const visited = new Set();

    if (x === y) return 0;

    queue.push([y, 0]);
    visited.add(y);

    while (queue.length) {
        const [num, cnt] = queue.shift();

        for (let next of [num - n, num / 2, num / 3]) {
            if (next === x) return cnt + 1;

            if (!Number.isInteger(next)) next = 0;

            if (x <= next && !visited.has(next)) {
                queue.push([next, cnt + 1]);
                visited.add(next);
            }
        }
    }

    return -1;
}