function solution(bridge_length, weight, truck_weights) {
    const wait = [...truck_weights];
    const cross = [];
    const pass = [];
    let arr = [];
    let seconds = 0;

    if (1 <= weight / truck_weights.reduce((a, c) => a + c, 0)) {
        return bridge_length + truck_weights.length;
    }

    while (pass.length !== truck_weights.length) {
        if (arr[0] === 0) {
            pass.push(cross.shift());
            arr.shift();
        }

        if (cross.reduce((a, c) => a + c, 0) + wait[0] <= weight) {
            cross.push(wait.shift());
            arr.push(bridge_length);
        }

        seconds++;

        arr = arr.map((x) => x - 1);
    }

    return seconds;
}