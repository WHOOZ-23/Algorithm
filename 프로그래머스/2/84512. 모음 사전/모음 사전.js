function solution(word) {
    let answer = 0;
    const vowels = ["A", "E", "I", "O", "U"];

    dfs("");

    function dfs(str) {
        if (str === word) return true;
        if (str.length === 5) return false;

        for (v of vowels) {
            str += v;
            answer++;

            if (dfs(str)) return true;

            str = str.substring(0, str.length - 1);
        }
    }

    return answer;
}