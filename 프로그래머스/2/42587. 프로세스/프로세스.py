def solution(priorities, location):
    priority = max(priorities)
    point = priorities.index(priority)
    answer = []
    cnt = 1

    while priority > 0:
        if len(answer):
            point = answer[-1]

        for i in range(point, len(priorities)):
            if priorities[i] == priority:
                if i == location:
                    return cnt

                answer.append(i)
                cnt += 1

            if i == len(priorities) - 1:
                for j in range(0, point):
                    if priorities[j] == priority:
                        if j == location:
                            return cnt

                        answer.append(j)
                        cnt += 1

        priority -= 1

    return 0