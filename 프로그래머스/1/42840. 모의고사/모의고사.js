function solution(answers) {
    const spg1 = [1, 2, 3, 4, 5];
    const spg2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const spg3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    const cnt1 = answers.filter((x, i) => x===spg1[i%spg1.length]).length;
    const cnt2 = answers.filter((x, i) => x===spg2[i%spg2.length]).length;
    const cnt3 = answers.filter((x, i) => x===spg3[i%spg3.length]).length;
    
    const maxScore = Math.max(cnt1, cnt2, cnt3);
    
    let result = [];
    
    if(maxScore<=cnt1) result.push(1);
    if(maxScore<=cnt2) result.push(2);
    if(maxScore<=cnt3) result.push(3);
    
    return result;
}