def solution(brown, yellow):
    s, w, h = brown + yellow, 0, 0

    for i in range(3, s):
        if s % i == 0 and (i + s/i) * 2 - 4 == brown:
            w, h = i, s/i

    return [w, h]