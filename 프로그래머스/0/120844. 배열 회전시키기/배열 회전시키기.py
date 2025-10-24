from collections import deque


def solution(numbers, direction):
    if direction == 'left':
        left_move = deque(numbers)
        left_move.rotate(-1)
        
        return list(left_move)
    elif direction == 'right':
        right_move = deque(numbers)
        right_move.rotate(1)
        
        return list(right_move)