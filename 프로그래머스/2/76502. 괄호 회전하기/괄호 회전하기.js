function solution(s) {
    let answer = 0;
    let stack1 = s.split("");
    const brackets = { "(": ")", "{": "}", "[": "]" };

    for (let i = 0; i < s.length; i++) {
        let stack2 = [];

        for (let j = 0; j < s.length; j++) {
            if (brackets[stack2[stack2.length - 1]] === stack1[j]) {
                stack2.pop();
            } else {
                stack2.push(stack1[j]);
            }
        }

        if (!stack2.length) {
            answer++;
        }

        stack1.push(stack1.shift());
    }

    return answer;
}