function solution(msg) {
    const dict = Array.from({ length: 26 }, (_, i) =>
        String.fromCharCode(i + 65)
    );
    const massage = msg.split("");
    const answer = [];
    let str = "";

    while (massage.length) {
        let next = "";

        str += massage.shift();

        if (massage[0]) {
            next = str + massage[0];
        }

        if (dict.includes(str) && !dict.includes(next)) {
            answer.push(dict.indexOf(str) + 1);
            dict.push(next);
            str = "";
        }
    }

    return answer;
}