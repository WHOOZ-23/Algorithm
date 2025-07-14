function solution(maps) {
    let [START, LEVER, EXIT] = [
        [0, 0],
        [0, 0],
        [0, 0],
    ];

    for (let i = 0; i < maps.length; i++) {
        for (let j = 0; j < maps[0].length; j++) {
            if (maps[i][j] === "S") START = [i, j];
            if (maps[i][j] === "L") LEVER = [i, j];
            if (maps[i][j] === "E") EXIT = [i, j];
        }
    }

    const tolever = bfs(maps, START, "L");
    if (tolever === -1) return -1;

    const toexit = bfs(maps, LEVER, "E");
    if (toexit === -1) return -1;

    return tolever + toexit;
}

function bfs(maps, start, goal) {
    const [startX, startY] = start;
    const visited = Array.from({ length: maps.length }, () =>
        Array(maps[0].length).fill(false)
    );
    const location = [[startX, startY, 0]];
    const dxs = [0, 0, -1, 1];
    const dys = [1, -1, 0, 0];

    visited[startX][startY] = true;

    while (location.length) {
        let [x, y, move] = location.shift();

        if (maps[x][y] === goal) return move;

        for (let i = 0; i < 4; i++) {
            let dx = dxs[i] + x;
            let dy = dys[i] + y;

            if (
                0 <= dx &&
                dx < maps.length &&
                0 <= dy &&
                dy < maps[0].length &&
                !visited[dx][dy] &&
                maps[dx][dy] !== "X"
            ) {
                visited[dx][dy] = true;
                location.push([dx, dy, move + 1]);
            }
        }
    }

    return -1;
}