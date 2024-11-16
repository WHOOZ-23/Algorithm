function solution(want, number, discount) {
    let answer = 0;

    for (
        let i = 0;
        i < discount.length - number.reduce((a, b) => a + b, 0) + 1;
        i++
    ) {
        const wantItems = {};
        want.forEach((x, i) => (wantItems[x] = number[i]));
        const discountItems = discount.slice(i, i + 10);

        discountItems.forEach((x) => {
            if (wantItems.hasOwnProperty(x) && 0 < wantItems[x]) {
                wantItems[x]--;
            }
        });

        if (!Object.values(wantItems).reduce((a, b) => a + b, 0)) {
            answer++;
        }
    }

    return answer;
}