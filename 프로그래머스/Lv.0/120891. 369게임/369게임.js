function solution(order) {
    return order.toString().replaceAll("0","").split("").filter((x) => x%3===0).length;
}