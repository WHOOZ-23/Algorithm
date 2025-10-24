def solution(hp):
    answer = 0

    for a in [5, 3, 1]:
        ants, hp = divmod(hp, a)
        answer += ants

    return answer