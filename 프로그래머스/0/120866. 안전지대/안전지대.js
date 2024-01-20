function solution(board) {    
    for(let i=0; i<board.length; i++) {
        for(let j=0; j<board[i].length; j++) {
            if(board[i][j]===1) {
                for(let k=-1; k<2; k++) {
                    for(let l=-1; l<2; l++) {
                        let x = i+k;
                        let y = j+l;
                        if(x>=0 && x<board.length && y>=0 && y<board[i].length && board[x][y]===0) {
                            board[x][y] = 2;
                        }
                    }
                }
            }
        }
    }
    
    return board.reduce((a, b) => [...a,...b]).filter((x) => x===0).length;
}