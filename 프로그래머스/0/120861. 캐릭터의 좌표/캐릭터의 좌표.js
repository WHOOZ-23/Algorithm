function solution(keyinput, board) {
    let arr = [0, 0];
  
    keyinput.forEach((x, i) => {
        switch(x) {
            case "up": arr[1]+1 <= ~~board[1]/2 ? arr[1] += 1 : arr[1];
                  break;
            case "down": arr[1]-1 >= -~~(board[1]/2) ? arr[1] -= 1 : arr[1];
                  break;
            case "left": arr[0]-1 >= -~~(board[0]/2) ? arr[0] -= 1 : arr[0];
                  break;
            case "right": arr[0]+1 <= ~~board[0]/2 ? arr[0] += 1 : arr[0];;
                  break;
        }
    })
    
    return arr;
}