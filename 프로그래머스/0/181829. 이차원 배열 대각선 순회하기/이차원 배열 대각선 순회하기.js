function solution(board, k) {
    return board.reduce((a, b, i) => i<=k ? a+b.reduce((c, d, j) => i+j<=k ? c+d : c) : a, 0)
}