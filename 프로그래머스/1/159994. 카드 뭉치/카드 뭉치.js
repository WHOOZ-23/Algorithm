function solution(cards1, cards2, goal) {
    let i = 0, j = 0;
    return goal.every((x) => {
        if(i<cards1.length && x===cards1[i]) {
            i++;
            return true;
        } else if(j<cards2.length && x===cards2[j]) {
            j++;
            return true;
        }
        return false;
    }) ? "Yes" : "No";
}