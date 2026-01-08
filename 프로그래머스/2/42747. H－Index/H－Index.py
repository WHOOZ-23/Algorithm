def solution(citations):
    h = 0

    while h <= max(citations):
        cnt = len(list(filter(lambda x: h <= x, citations)))

        if cnt < h:
            break

        h += 1

    return h - 1