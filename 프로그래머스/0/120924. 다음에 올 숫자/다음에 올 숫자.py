def solution(common):
    if common[0] > 0 and common[1] % common[0] == common[2] % common[1]:
        return common[-1] * (common[1] // common[0])
    else:
        return common[-1] + (common[1] - common[0])