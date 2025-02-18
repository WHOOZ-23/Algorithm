function solution(n) {
    const arr = new Array(n).fill().map(() => new Array(n).fill(0));
    let num = 1;
    let x = 0;
    let y = 0;
    let d = 0;
    const dxs = [1, 0, -1];
    const dys = [0, 1, -1];

    while (num <= (n * (n + 1)) / 2) {
        arr[x][y] = num++;

        const dx = x + dxs[d];
        const dy = y + dys[d];

        if (dx === n || dy === n || arr[dx][dy] !== 0) {
            d = (d + 1) % 3;
        }

        x += dxs[d];
        y += dys[d];
    }

    return arr.flat().filter((x) => x !== 0);
}