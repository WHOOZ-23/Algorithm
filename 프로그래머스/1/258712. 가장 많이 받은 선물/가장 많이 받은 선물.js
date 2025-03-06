function solution(friends, gifts) {
    const count = new Array(friends.length)
        .fill()
        .map(() => new Array(friends.length).fill(0));
    const giftscore = {};
    const answer = {};

    friends.forEach((x) => (giftscore[x] = 0));

    for (const name of gifts) {
        const [giver, getter] = name.split(" ");

        count[friends.indexOf(giver)][friends.indexOf(getter)]++;
        giftscore[giver]++;
        giftscore[getter]--;
    }

    for (let i = 0; i < count.length; i++) {
        for (let j = 0; j < count[0].length; j++) {
            if (i === j) continue;

            if (count[i][j] > count[j][i]) {
                answer[friends[i]] = (answer[friends[i]] || 0) + 1;
            } else if (count[i][j] === count[j][i]) {
                if (giftscore[friends[i]] > giftscore[friends[j]])
                    answer[friends[i]] = (answer[friends[i]] || 0) + 1;
            }
        }
    }

    const result = Object.values(answer).sort((a, b) => b - a)[0];

    return result ? result : 0;
}