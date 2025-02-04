function solution(m, n, board) {
    let answer = 0;
    let arr = [];

    const newBoard = board.map((x) => x.split(""));

    while (true) {
        const prev = newBoard.map((x) => x.slice());

        for (let i = 0; i < m - 1; i++) {
            for (let j = 0; j < n - 1; j++) {
                const current = newBoard[i][j];

                if (
                    current === newBoard[i][j + 1] &&
                    current === newBoard[i + 1][j] &&
                    current === newBoard[i + 1][j + 1]
                ) {
                    arr.push([i, j], [i, j + 1], [i + 1, j], [i + 1, j + 1]);
                }
            }
        }

        for (const [i, j] of arr) {
            newBoard[i][j] = ".";
            answer++;
        }

        arr = [];

        if (JSON.stringify(prev) === JSON.stringify(newBoard)) {
            return newBoard.flat().filter((x) => x === ".").length;
        }

        for (let j = 0; j < n; j++) {
            for (let i = m - 1; i > 0; i--) {
                let n = 1;

                while (newBoard[i][j] === "." && i > n - 1) {
                    if (newBoard[i - n][j] !== ".") {
                        [newBoard[i][j], newBoard[i - n][j]] = [
                            newBoard[i - n][j],
                            newBoard[i][j],
                        ];
                        break;
                    }

                    n++;
                }
            }
        }
    }
}