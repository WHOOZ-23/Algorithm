function solution(numbers, target) {
    let answer = 0;

    dfs(0, 0);

    function dfs(x, y) {
        if (y < numbers.length) {
            dfs(x + numbers[y], y + 1);
            dfs(x - numbers[y], y + 1);
        } else {
            if (x === target) {
                answer++;
            }
        }
    }

    return answer;
}