function solution(land) {
    let [a, b, c, d] = land[0];

    for (let i = 1; i < land.length; i++) {
        const [e, f, g, h] = [a, b, c, d];
        [a, b, c, d] = land[i];

        a += Math.max(...[f, g, h]);
        b += Math.max(...[e, g, h]);
        c += Math.max(...[e, f, h]);
        d += Math.max(...[e, f, g]);
    }

    return Math.max(...[a, b, c, d]);
}