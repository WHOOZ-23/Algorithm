function solution(d, budget) {
    return d.sort((a, b) => a-b).filter((x) => {
        if(budget-x>=0) {
            budget-=x;
            return x;
        }
    }).length;
}