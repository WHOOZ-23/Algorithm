def solution(dot):
    [x, y] = dot

    if 0 < x * y:
        if 0 < x:
            return 1
        else:
            return 3
    else:
        if x < 0:
            return 2
        else:
            return 4