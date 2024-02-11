function solution(board, k) {
    let arr = [];
    board.map((x, i) => x.filter((y, j) => i+j<=k ? arr.push(y) : 0));
    
    return arr.reduce((a, b) => a+b);
}