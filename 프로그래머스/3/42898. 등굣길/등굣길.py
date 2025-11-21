def solution(m, n, puddles):
    ground = [[0] * (m+1) for _ in range(n+1)]

    ground[1][1] = 1
    
    for y in range(1, n+1):
        for x in range(1, m+1):
            if [x, y] in puddles or [x, y] == [1, 1]:
                continue
            else:
                ground[y][x] = ground[y-1][x] + ground[y][x-1]

    return ground[-1][-1] % 1000000007