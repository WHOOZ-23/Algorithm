function solution(numbers, target) {
    let answer = 0;

    dfs(numbers[0], 1);
    dfs(-numbers[0], 1);

    function dfs(x, y) {
        if (y === numbers.length) {
            if (x === target) {
                answer++;
            }
            return;
        }

        dfs(x + numbers[y], y + 1);
        dfs(x - numbers[y], y + 1);
    }

    return answer;
}