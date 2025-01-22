function solution(fees, records) {
    const result = {};
    const check = {};
    const answer = [];

    for (const record of records) {
        const [time, num, inout] = record.split(" ");

        if (inout === "IN") {
            check[num] = time;
        } else if (inout === "OUT") {
            const [h1, m1] = check[num].split(":");
            const [h2, m2] = time.split(":");
            let minutes1 = 0;

            if (m2 < m1) {
                minutes1 = (+h2 - +h1 - 1) * 60 + +m2 + 60 - +m1;
            } else {
                minutes1 = (+h2 - +h1) * 60 + +m2 - +m1;
            }

            result[num] = (result[num] || 0) + minutes1;
            delete check[num];
        }
    }

    if (Object.keys(check).length) {
        for (const record of Object.entries(check)) {
            const [h, m] = record[1].split(":");
            let minutes2 = 0;

            minutes2 = (23 - h) * 60 + 59 - +m;

            result[record[0]] = (result[record[0]] || 0) + minutes2;
            delete check[record[0]];
        }
    }

    const sorted = Object.entries(result).sort((a, b) => a[0] - b[0]);

    for (const [car, minutes] of sorted) {
        let total = 0;

        if (minutes <= fees[0]) {
            total += fees[1];
        } else {
            total =
                total +
                fees[1] +
                Math.ceil((minutes - fees[0]) / fees[2]) * fees[3];
        }

        answer.push(total);
    }

    return answer;
}