function solution(score) {
    const avg = score.map((x) => x.reduce((a, b) => (a+b)/2));
    return avg.map((x) => [...avg].sort((a, b) => b-a).indexOf(x)+1);
}