function solution(progresses, speeds) {
    let answer = [];

    while (progresses.length !== 0) {
        progresses = progresses.map((progress, i) => {
            if (100 <= progress + speeds[i]) {
                return (progress = 100);
            } else {
                return progress + speeds[i];
            }
        });

        if (progresses[0] === 100) {
            let cnt = 0;

            for (let i = 0; ; ) {
                if (progresses[i] === 100) {
                    cnt++;
                    progresses.shift();
                    speeds.shift();

                    if (progresses.length === 0) {
                        answer.push(cnt);
                        break;
                    }
                } else {
                    answer.push(cnt);
                    break;
                }
            }
        }
    }

    return answer;
}