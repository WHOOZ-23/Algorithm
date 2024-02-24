function solution(cards1, cards2, goal) {
    let i = 0, j = 0;
    for(let g of goal) {
        if(g===cards1[i]) i++;
        else if(g===cards2[j]) j++;
        else return "No";
    };
    return "Yes";
}