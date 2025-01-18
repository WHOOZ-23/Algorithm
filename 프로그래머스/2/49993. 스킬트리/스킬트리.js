function solution(skill, skill_trees) {
    let answer = 0;

    for (const skills of skill_trees) {
        const skillCheck = skill.split("");
        let check = true;

        for (const s of skills) {
            if (skillCheck.includes(s)) {
                if (skillCheck[0] === s) {
                    skillCheck.shift();
                } else {
                    check = false;
                    break;
                }
            }
        }

        if (check) answer++;
    }

    return answer;
}