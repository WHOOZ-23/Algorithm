function solution(k, score) {
    let result = [];
    
    return score.reduce((a, b) => {
        result.push(b);
        result = result.sort((a, b) => b-a).slice(0, k);
        return [...a, Math.min(...result)];
    }, []);
}