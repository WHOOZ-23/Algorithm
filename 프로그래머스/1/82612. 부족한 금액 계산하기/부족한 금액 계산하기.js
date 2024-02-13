function solution(price, money, count) {
    const need = count*(price+price*count)/2 - money;
    return need>0 ? need : 0;
}