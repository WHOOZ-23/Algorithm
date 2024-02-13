function solution(price, money, count) {
    return count*(price+price*count)/2 > money ? count*(price+price*count)/2 - money : 0;
}