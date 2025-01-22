function solution(order) {
    const assistance = [];
    const truck = [];
    let j = 0;

    for (let i = 1; i <= order.length; i++) {
        if (assistance[assistance.length - 1] === order[j]) {
            while (
                assistance.length &&
                assistance[assistance.length - 1] === order[j]
            ) {
                truck.push(assistance.pop());
                j++;
            }
        }

        if (i === order[j]) {
            truck.push(order[j]);
            j++;
        } else {
            assistance.push(i);
        }
    }

    while (
        assistance.length &&
        assistance[assistance.length - 1] === order[j]
    ) {
        truck.push(assistance.pop());
        j++;
    }

    return truck.length;
}
