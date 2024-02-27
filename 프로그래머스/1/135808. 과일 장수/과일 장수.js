function solution(k, m, score) {
    let sum = 0;
    
    score.sort((a, b) => b-a);
    
    return score.reduce((a, b, i) => i%m===m-1 ? a+(b*m) : a, 0);
}