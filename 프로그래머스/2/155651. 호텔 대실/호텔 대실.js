function solution(book_time) {
    const rooms = [];
    let answer = 0;

    book_time = book_time
        .map((time) => [times(time[0]), times(time[1])])
        .sort((a, b) => a[0] - b[0]);

    for (let i = 0; i < book_time.length; i++) {
        const [start, end] = book_time[i];

        rooms.map((room, index) => {
            if (room[1] <= start - 10) {
                rooms.splice(index, 1);
            }
        });

        rooms.push(book_time[i]);

        answer = Math.max(rooms.length, answer);
    }

    return answer;
}

function times(time) {
    const [hours, minutes] = time.split(":").map(Number);

    return hours * 60 + minutes;
}