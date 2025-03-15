function solution(players, m, k) {
    const servers = {};
    let total = 0;
    let answer = 0;

    for (let i = 0; i < 24; i++) {
        const need = Math.floor(players[i] / m);

        if (servers[i]) {
            total -= servers[i];
            delete servers[i];
        }

        if (total < need) {
            const add = need - total;

            total += add;
            answer += add;
            servers[i + k] = add;
        }
    }

    return answer;
}