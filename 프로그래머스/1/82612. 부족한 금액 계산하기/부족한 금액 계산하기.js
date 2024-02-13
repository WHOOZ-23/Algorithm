function solution(price, money, count) {
    const need = money - count*(price+price*count)/2;
    
    return need < 0 ? Math.abs(need) : 0;
}