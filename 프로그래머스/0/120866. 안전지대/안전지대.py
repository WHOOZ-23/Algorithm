def solution(board):
    for i, line in enumerate(board):
        for j, cell in enumerate(line):
            if cell == 1:
                for danger_i in range(i-1, i+2):
                    for danger_j in range(j-1, j+2):
                        if 0 <= danger_i < len(board) and 0 <= danger_j < len(board[0]) and board[danger_i][danger_j] != 1:
                            board[danger_i][danger_j] = 2

    return sum(k.count(0) for k in board)