function solution(k, dungeons) {
    let answer = 0;
    const visited = Array.from({ length: dungeons.length }, (_) => false);

    dfs(dungeons, visited, 0, k);

    function dfs(dungeons, visited, cnt, k) {
        answer = Math.max(answer, cnt);

        for (let i = 0; i < dungeons.length; i++) {
            if (!visited[i] && dungeons[i][0] <= k) {
                visited[i] = true;

                dfs(dungeons, visited, cnt + 1, k - dungeons[i][1]);

                visited[i] = false;
            }
        }

        return;
    }

    return answer;
}