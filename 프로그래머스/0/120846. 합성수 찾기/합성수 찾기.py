def solution(n):
    answer = 0

    for x in range(4, n + 1):
        if x == 5 or x == 7:
            continue
        elif x % 2 == 0 or x % 3 == 0 or x % 5 == 0 or x % 7 == 0:
            answer += 1
            
    return answer