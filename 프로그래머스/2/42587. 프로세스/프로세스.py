def solution(priorities, location):
    priority = max(priorities)
    point = priorities.index(priority)
    answer = []

    while priority > 0:
        if len(answer):
            point = answer[-1]

        for i in range(point, len(priorities)):
            if priorities[i] == priority:
                answer.append(i)

            if i == len(priorities) - 1:
                for j in range(0, point):
                    if priorities[j] == priority:
                        answer.append(j)

        priority -= 1

    return answer.index(location) + 1