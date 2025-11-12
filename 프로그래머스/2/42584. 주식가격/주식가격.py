def solution(prices):
    answer = [0 for _ in range(len(prices))]
    check = []

    for i, p in enumerate(prices):
        while check and prices[check[-1]] > p:
            j = check.pop()
            answer[j] = i - j

        check.append(i)

    while check:
        j = check.pop(0)
        answer[j] = len(prices) - j - 1

    return answer