function solution(sequence, k) {
    let answer = [0, 0];
    let [start, end] = [0, 0];
    let len = sequence.length + 1;
    let sum = sequence[0];

    while (start < sequence.length) {
        if (sum === k && end - start + 1 < len) {
            answer = [start, end];
            len = end - start + 1;
        }

        if (sum < k) {
            end++;

            if (end < sequence.length) {
                sum += sequence[end];
            } else {
                start++;
            }
        } else {
            sum -= sequence[start];
            start++;
        }
    }

    return answer;
}