function solution(d, budget) {
    const result = d.sort((a, b) => a-b).filter((x) => {
        if(budget-x>=0) {
            budget-=x;
            return x;
        }
    });
    
    return result.length;
}