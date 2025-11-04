def solution(i, j, k):
    return "".join(str(s) for s in range(i, j+1)).count(str(k))