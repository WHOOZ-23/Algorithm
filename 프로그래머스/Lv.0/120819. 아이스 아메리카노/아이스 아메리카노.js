function solution(money) {
    let list = [];
    list.push(Math.floor(money/5500));
    list.push(money-(list[0]*5500));
    return list;
}