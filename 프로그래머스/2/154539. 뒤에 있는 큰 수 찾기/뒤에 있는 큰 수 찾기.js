function solution(numbers) {
    let answer = new Array(numbers.length).fill(-1);
    let maxArr = [];

    for (let i = numbers.length - 2; i >= 0; i--) {
        if (numbers[i] < numbers[i + 1]) {
            answer[i] = numbers[i + 1];
            maxArr.push(numbers[i + 1]);
        } else {
            while (maxArr.length) {
                if (numbers[i] < maxArr[maxArr.length - 1]) {
                    answer[i] = maxArr[maxArr.length - 1];
                    break;
                } else {
                    maxArr.pop();
                }
            }
        }
    }

    return answer;
}