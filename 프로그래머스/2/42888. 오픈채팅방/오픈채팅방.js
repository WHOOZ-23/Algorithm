function solution(record) {
    const users = {};
    const answer = [];

    for (const r of record) {
        const [check, id, nickname] = r.split(" ");

        switch (check) {
            case "Enter":
                users[id] = nickname;
                answer.push(`${id}님이 들어왔습니다.`);
                break;
            case "Change":
                users[id] = nickname;
                break;
            case "Leave":
                answer.push(`${id}님이 나갔습니다.`);
                break;
        }
    }

    return answer.map((x) => {
        const id = x.split("님")[0];

        return x.replace(id, users[id]);
    });
}