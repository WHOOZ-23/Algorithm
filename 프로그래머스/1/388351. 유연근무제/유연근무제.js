function solution(schedules, timelogs, startday) {
    let answer = 0;

    for (let i = 0; i < schedules.length; i++) {
        let schedule = schedules[i] + 10;
        let day = startday;
        let check = 0;

        if (60 <= schedule % 100) {
            schedule += 40;
        }

        for (let j = 0; j < timelogs[i].length; j++) {
            if (day % 7 !== 6 && day % 7 !== 0) {
                if (timelogs[i][j] <= schedule) {
                    check++;
                }
            }

            if (7 <= day) day = 0;

            day++;
        }

        if (check === 5) answer++;
    }

    return answer;
}