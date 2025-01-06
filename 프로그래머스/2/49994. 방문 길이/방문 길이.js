function solution(dirs) {
    const directions = { U: [-1, 0], D: [1, 0], L: [0, -1], R: [0, 1] };
    const location = [0, 0];
    const arr = [];
    let answer = 0;

    for (const d of dirs.split("")) {
        const [x, y] = [location[0], location[1]];
        const dx = x + directions[d][0];
        const dy = y + directions[d][1];

        if (-5 <= dx && dx <= 5 && -5 <= dy && dy <= 5) {
            location[0] += directions[d][0];
            location[1] += directions[d][1];
        } else {
            continue;
        }

        const move = [x, y, location[0], location[1]];
        const reverse = [location[0], location[1], x, y];

        if (
            !arr.some((x) => JSON.stringify(x) === JSON.stringify(move)) &&
            !arr.some((x) => JSON.stringify(x) === JSON.stringify(reverse)) &&
            (x !== dx || y !== dy)
        ) {
            arr.push(move);
            answer++;
        }
    }

    return answer;
}