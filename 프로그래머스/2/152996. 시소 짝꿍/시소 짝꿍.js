function solution(weights) {
    const counts = {};
    let answer = 0;

    weights.map((x) => (counts[x] = (counts[x] || 0) + 1));

    for (let i = 0; i <= 1000; i++) {
        if (0 < counts[i]) {
            answer += (counts[i] * (counts[i] - 1)) / 2;
            if (0 < counts[(i * 4) / 3]) {
                answer += counts[i] * counts[(i * 4) / 3];
            }

            if (0 < counts[(i * 4) / 2]) {
                answer += counts[i] * counts[(i * 4) / 2];
            }

            if (0 < counts[(i * 3) / 2]) {
                answer += counts[i] * counts[(i * 3) / 2];
            }
        }
    }

    return answer;
}