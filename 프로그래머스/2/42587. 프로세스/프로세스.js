function solution(priorities, location) {
    const check = new Array(priorities.length).fill(false);
    const result = new Map();
    let answer = 9;
    let i;

    while (answer) {
        if (result.size) {
            i = Array.from(result.keys()).pop();
        } else {
            i = 0;
        }

        for (; i < priorities.length; i++) {
            if (!check[i] && priorities[i] === answer) {
                result.set(i, priorities[i]);
                check[i] = true;
            }

            if (i === priorities.length - 1 && result.size) {
                const loop = Array.from(result.keys()).pop();

                for (let j = 0; j < loop; j++) {
                    if (!check[j] && priorities[j] === answer) {
                        result.set(j, priorities[j]);
                        check[j] = true;
                    }
                }
            }
        }

        answer -= 1;
    }

    return Array.from(result.keys()).indexOf(location) + 1;
}