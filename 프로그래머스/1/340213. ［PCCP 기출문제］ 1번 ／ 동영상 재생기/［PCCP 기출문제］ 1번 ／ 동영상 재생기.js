function solution(video_len, pos, op_start, op_end, commands) {
    const [videomm, videoss] = video_len.split(":").map(Number);
    const [startmm, startss] = op_start.split(":").map(Number);
    const [endmm, endss] = op_end.split(":").map(Number);
    let [mm, ss] = pos.split(":").map(Number);

    for (const command of commands) {
        if (
            startmm * 60 + startss <= mm * 60 + ss &&
            mm * 60 + ss <= endmm * 60 + endss
        ) {
            mm = endmm;
            ss = endss;
        }

        if (command === "prev") {
            if (0 < mm && ss < 10) {
                mm -= 1;
                ss += 60;
            }

            ss -= 10;

            if (mm === 0 && ss < 0) {
                mm = 0;
                ss = 0;
            }
        } else if (command === "next") {
            ss += 10;

            if (60 <= ss) {
                mm += 1;
                ss -= 60;
            }

            if (videomm <= mm && videoss < ss) {
                mm = videomm;
                ss = videoss;
            }
        }

        if (
            startmm * 60 + startss <= mm * 60 + ss &&
            mm * 60 + ss <= endmm * 60 + endss
        ) {
            mm = endmm;
            ss = endss;
        }
    }

    return `${String(mm).padStart(2, "0")}:${String(ss).padStart(2, "0")}`;
}