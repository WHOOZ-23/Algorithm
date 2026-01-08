def solution(citations):
    h = 0

    citations.sort(reverse=True)

    for i, c in enumerate(citations, start=1):
        if i <= c:
            h = i
        else:
            break

    return h