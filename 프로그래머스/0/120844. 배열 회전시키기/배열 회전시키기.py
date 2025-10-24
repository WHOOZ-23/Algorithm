from collections import deque


def solution(numbers, direction):
    move = deque(numbers)

    if direction == 'left':
        move.rotate(-1)
    elif direction == 'right':
        move.rotate(1)

    return list(move)