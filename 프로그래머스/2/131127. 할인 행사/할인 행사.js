function solution(want, number, discount) {
    let answer = 0;

    for (let i = 0; i < discount.length - 9; i++) {
        const discountItems = discount.slice(i, i + 10);
        let signUp = true;

        for (let j = 0; j < want.length; j++) {
            if (
                discountItems.filter((x) => x === want[j]).length !== number[j]
            ) {
                signUp = false;
            }
        }

        if (signUp) answer++;
    }

    return answer;
}