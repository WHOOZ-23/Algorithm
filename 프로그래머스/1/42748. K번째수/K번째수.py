def solution(array, commands):
    answer = []

    for s, e, i in commands:
        sliced = sorted(array[s-1:e])
        answer.append(sliced[i-1])

    return answer