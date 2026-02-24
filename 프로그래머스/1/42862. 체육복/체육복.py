def solution(n, lost, reserve):
    reserved = sorted(filter(lambda x: x not in lost, reserve))
    lost = sorted(filter(lambda x: x not in reserve, lost))

    for r in reserved:
        if r - 1 in lost:
            lost.remove(r - 1)
        elif r + 1 in lost:
            lost.remove(r + 1)

    return n - len(lost)