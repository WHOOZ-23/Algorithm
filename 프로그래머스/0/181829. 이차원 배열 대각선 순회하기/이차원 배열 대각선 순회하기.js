function solution(board, k) {
    return board.map((x, i) => x.filter((y, j) => i+j<=k)).flat().reduce((a, b) => a+b);
}