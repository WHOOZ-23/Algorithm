function solution(n, t, m, p) {
    const arr = Array.from({ length: t * m }, (_, i) =>
        i.toString(n).toUpperCase()
    ).join("");
    let answer = "";

    for (let i = p - 1; i < t * m; i += m) {
        answer += arr[i];
    }

    return answer;
}