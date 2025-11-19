def solution(sizes):
    answer = [0, 0]

    for w, h in list(map(lambda x: sorted(x, reverse=True), sizes)):
        answer = [max(answer[0], w), max(answer[1], h)]

    return answer[0] * answer[1]