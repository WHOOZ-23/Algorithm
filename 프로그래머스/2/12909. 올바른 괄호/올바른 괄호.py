def solution(s):
    answer = []

    for c in s:
        if c == '(':
            answer.append(c)
        else:
            if len(answer) > 0 and answer[-1] == '(':
                answer.pop()
            else:
                answer.append(c)

    return True if len(answer) == 0 else False