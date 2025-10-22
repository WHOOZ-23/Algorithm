from collections import Counter


def solution(array):
    counter = Counter(array)
    mode = counter.most_common(2)

    if len(mode) > 1 and mode[0][1] == mode[1][1]:
        print(-1)
        return -1
    else:
        print(mode[0][0])
        return mode[0][0]