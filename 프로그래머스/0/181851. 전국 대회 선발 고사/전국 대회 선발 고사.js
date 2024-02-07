function solution(rank, attendance) {
    let [a, b, c] = rank.filter((_, i) => attendance[i]).sort((a, b) => a-b).slice(0, 3).map((x) => rank.indexOf(x));
    return a*10000 + b*100 + c;
}