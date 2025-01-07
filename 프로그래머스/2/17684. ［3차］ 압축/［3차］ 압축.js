function solution(msg) {
    const dict = Array.from({ length: 26 }, (_, i) =>
        String.fromCharCode(i + 65)
    );
    const answer = [];

    for (let i = 0; i < msg.length; i++) {
        let w = msg[i];
        let c = msg[i + 1];

        while (dict.includes(w + c)) {
            i++;
            w += c;
            c = msg[i + 1];
        }

        answer.push(dict.indexOf(w) + 1);
        dict.push(w + c);
    }

    return answer;
}