function solution(maps) {
    const goal = [maps.length - 1, maps[0].length - 1];
    let location = [];
    let dxs = [0, 0, -1, 1];
    let dys = [-1, 1, 0, 0];

    location.push([0, 0, 1]);

    while (location.length) {
        let [x, y, move] = location.shift();

        if (x === goal[0] && y === goal[1]) {
            return move;
        }

        for (let i = 0; i < 4; i++) {
            let dx = dxs[i] + x;
            let dy = dys[i] + y;

            if (
                0 <= dx &&
                dx < maps.length &&
                0 <= dy &&
                dy < maps[0].length &&
                maps[dx][dy] === 1
            ) {
                location.push([dx, dy, move + 1]);
                maps[dx][dy] = 0;
            }
        }
    }

    return -1;
}