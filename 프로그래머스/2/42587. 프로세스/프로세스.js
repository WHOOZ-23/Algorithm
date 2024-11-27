function solution(priorities, location) {
    const check = new Array(priorities.length).fill(false);
    const result = [];
    let answer = 9;
    let i;

    while (answer) {
        if (result.length) {
            i = result[result.length - 1];
        } else {
            i = 0;
        }

        for (; i < priorities.length; i++) {
            if (!check[i] && priorities[i] === answer) {
                result.push(i);
                check[i] = true;
            }

            if (i === priorities.length - 1 && result.length) {
                const loop = result[result.length - 1];

                for (let j = 0; j < loop; j++) {
                    if (!check[j] && priorities[j] === answer) {
                        result.push(j);
                        check[j] = true;
                    }
                }
            }
        }

        answer -= 1;
    }

    return result.indexOf(location) + 1;
}