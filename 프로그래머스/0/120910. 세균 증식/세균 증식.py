def solution(n, t):
    while 0 < t:
        n *= 2
        t -= 1

    return n