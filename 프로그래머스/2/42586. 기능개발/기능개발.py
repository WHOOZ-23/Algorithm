import math


def solution(progresses, speeds):
    days = [math.ceil((100 - progress)/speed) for progress, speed in zip(progresses, speeds)]
    answer = []
    lead = days[0]
    cnt = 1

    for day in days[1:]:
        if lead >= day:
            cnt += 1
        else:
            answer.append(cnt)
            lead = day
            cnt = 1

    answer.append(cnt)

    return answer