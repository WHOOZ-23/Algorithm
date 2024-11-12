function solution(s) {
    let answer = 0;
    let stack1 = s.split("");

    for (let i = 0; i < s.length; i++) {
        let stack2 = [];
        for (let j = 0; j < s.length; j++) {
            if (stack2.length) {
                if (stack2[stack2.length - 1] === "(" && stack1[j] === ")") {
                    stack2.pop();
                } else if (
                    stack2[stack2.length - 1] === "{" &&
                    stack1[j] === "}"
                ) {
                    stack2.pop();
                } else if (
                    stack2[stack2.length - 1] === "[" &&
                    stack1[j] === "]"
                ) {
                    stack2.pop();
                } else {
                    stack2.push(stack1[j]);
                }
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