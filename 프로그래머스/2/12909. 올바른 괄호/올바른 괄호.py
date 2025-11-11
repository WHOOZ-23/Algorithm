def solution(s):
    answer = 0

    for c in s:
        answer += 1 if c == '(' else -1
        
        if answer < 0:
            return False

    return False if answer else True