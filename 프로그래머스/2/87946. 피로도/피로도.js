function solution(k, dungeons) {
    let answer = 0;
    const visited = new Array(dungeons.length).fill(false);

    dfs(0, k);

    function dfs(cnt, k) {
        answer = Math.max(answer, cnt);

        for (let i = 0; i < dungeons.length; i++) {
            if (!visited[i] && dungeons[i][0] <= k) {
                visited[i] = true;

                dfs(cnt + 1, k - dungeons[i][1]);

                visited[i] = false;
            }
        }
    }

    return answer;
}