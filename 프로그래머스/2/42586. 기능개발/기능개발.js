function solution(progresses, speeds) {
    progresses = progresses.map((progress, i) =>
        Math.ceil((100 - progress) / speeds[i])
    );

    let answer = [0];
    let day = progresses[0];
    let index = 0;

    for (const progress of progresses) {
        if (progress <= day) {
            answer[index] += 1;
        } else {
            day = progress;
            answer[++index] = 1;
        }
    }

    return answer;
}