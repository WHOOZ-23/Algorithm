def solution(dot):
    [x, y] = dot
    
    if 0 < x and 0 < y:
        return 1
    elif x < 0  and 0 < y:
        return 2
    elif x < 0 and y < 0:
        return 3
    elif 0 < x and y < 0:
        return 4