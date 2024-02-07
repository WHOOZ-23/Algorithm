function solution(rank, attendance) {
    const [a, b, c] = rank.map((x, i) => [x, i]).filter(([x, i]) => attendance[i]).sort(([a], [b]) => a-b).slice(0, 3);
    return a[1]*10000 + b[1]*100 + c[1];
}