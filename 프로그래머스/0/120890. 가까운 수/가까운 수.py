def solution(array, n):
    lst = sorted(array, key=lambda x: abs(n - x))

    if len(lst) > 1 and abs(n - lst[0]) == abs(n - lst[1]):
        return lst[0] if lst[0] < lst[1] else lst[1]

    return lst[0]