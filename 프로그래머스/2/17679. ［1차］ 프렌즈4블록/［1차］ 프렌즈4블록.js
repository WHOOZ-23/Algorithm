function solution(m, n, board) {
    let answer = 0;
    board = board.map(row => row.split("")); // 문자열을 2차원 배열로 변환

    while (true) {
        let remove = new Set(); // 제거할 블록 좌표 저장

        // 1. 2x2 블록 찾기
        for (let i = 0; i < m - 1; i++) {
            for (let j = 0; j < n - 1; j++) {
                let char = board[i][j];
                if (
                    char !== "." &&
                    char === board[i][j + 1] &&
                    char === board[i + 1][j] &&
                    char === board[i + 1][j + 1]
                ) {
                    remove.add(`${i},${j}`);
                    remove.add(`${i},${j + 1}`);
                    remove.add(`${i + 1},${j}`);
                    remove.add(`${i + 1},${j + 1}`);
                }
            }
        }

        if (remove.size === 0) break; // 더 이상 제거할 블록이 없으면 종료
        answer += remove.size; // 제거된 블록 수 더하기

        // 2. 블록 제거
        for (let pos of remove) {
            let [x, y] = pos.split(",").map(Number);
            board[x][y] = ".";
        }

        // 3. 블록 내리기 (열 단위로 진행)
        for (let j = 0; j < n; j++) {
            let stack = [];
            for (let i = 0; i < m; i++) {
                if (board[i][j] !== ".") stack.push(board[i][j]); // 빈칸이 아닌 블록 저장
            }

            for (let i = m - 1; i >= 0; i--) {
                board[i][j] = stack.length ? stack.pop() : "."; // 아래부터 채우기
            }
        }
    }

    return answer;
}