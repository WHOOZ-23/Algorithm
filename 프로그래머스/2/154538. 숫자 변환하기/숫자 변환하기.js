function solution(x, y, n) {
    const arr = [];
    const visited = {};

    arr.push([y, 0]);
    visited[y] = true;

    function bfs() {
        while (arr.length) {
            const [x1, cnt] = arr.shift();

            if (x1 === x) {
                return cnt;
            }

            for (let i = 0; i < 3; i++) {
                const next = calc(x1, i);

                if (x <= next && !visited[next]) {
                    arr.push([next, cnt + 1]);
                    visited[next] = true;
                }
            }
        }

        return -1;
    }

    return bfs();

    function calc(x, i) {
        switch (i) {
            case 0:
                return x - n;
            case 1:
                return x % 2 ? 0 : x / 2;
            case 2:
                return x % 3 ? 0 : x / 3;
        }
    }
}