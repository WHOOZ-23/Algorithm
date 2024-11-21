function solution(citations) {
    let answer = 0;

    citations = citations.sort((a, b) => a - b);

    for (let i = 0; i < citations[citations.length - 1]; i++) {
        const result = citations.filter((x) => i <= x);

        if (i <= result.length) {
            answer = i;
        }
    }

    return answer;
}