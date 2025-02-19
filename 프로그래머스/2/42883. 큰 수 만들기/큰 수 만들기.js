function solution(number, k) {
    const arr = [];
    let cnt = 0;

    for (let i = 0; i < number.length; i++) {
        while (arr.length && cnt < k && arr[arr.length - 1] < number[i]) {
            arr.pop();
            cnt++;
        }

        arr.push(number[i]);
    }

    return arr.slice(0, number.length - k).join("");
}