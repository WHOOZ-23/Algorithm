function solution(topping) {
    let answer = 0;
    const cake1 = {};
    const cake2 = new Set();

    for (tp of topping) {
        cake1[tp] = (cake1[tp] || 0) + 1;
    }

    let cnt = Object.keys(cake1).length;

    for (tp of topping) {
        cake2.add(tp);
        cake1[tp]--;

        if (!cake1[tp]) {
            cnt--;
        }

        if (cnt === cake2.size) {
            answer++;
        }
    }

    return answer;
}