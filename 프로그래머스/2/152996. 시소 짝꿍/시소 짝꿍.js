function solution(weights) {
    const counts = {};
    let answer = 0;

    weights.map((x) => (counts[x] = (counts[x] || 0) + 1));

    for (let i = 0; i <= 1000; i++) {
        if (counts[i]) {
            answer += (counts[i] * (counts[i] - 1)) / 2;
            if (counts[(i * 4) / 3]) {
                answer += counts[i] * counts[(i * 4) / 3];
            }

            if (counts[(i * 4) / 2]) {
                answer += counts[i] * counts[(i * 4) / 2];
            }

            if (counts[(i * 3) / 2]) {
                answer += counts[i] * counts[(i * 3) / 2];
            }
        }
    }

    return answer;
}