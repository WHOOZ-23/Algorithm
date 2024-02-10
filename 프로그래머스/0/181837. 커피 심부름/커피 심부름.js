function solution(order) {
    return order.reduce((a, b) => b.includes("cafelatte") ? a+5000 : a+4500, 0);
}