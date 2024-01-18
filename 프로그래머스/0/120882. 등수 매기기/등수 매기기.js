function solution(score) {
    let avg = score.map((x) => (x[0]+x[1])/2);
    return avg.map((x) => [...avg].sort((a, b) => b-a).indexOf(x)+1);
}