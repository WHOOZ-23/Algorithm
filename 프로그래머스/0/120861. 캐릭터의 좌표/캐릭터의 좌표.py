def solution(keyinput, board):
    move = {"up": [0, 1], "down": [0, -1], "left": [-1, 0], "right": [1, 0]}
    user = [0, 0]
    [board_x, board_y] = [board[0] // 2, board[1] // 2]

    for m in keyinput:
        if abs(user[0] + move[m][0]) <= board_x:
            user[0] += move[m][0]

        if abs(user[1] + move[m][1]) <= board_y:
            user[1] += move[m][1]

    return user