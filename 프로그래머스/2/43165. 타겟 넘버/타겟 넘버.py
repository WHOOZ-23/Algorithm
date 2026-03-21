def solution(numbers, target):
    cnt = 0

    def dfs(n, i):
        nonlocal cnt

        if i == len(numbers):
            if n == target:
                cnt += 1
                return cnt

            return

        dfs(n + numbers[i], i + 1)
        dfs(n - numbers[i], i + 1)

    dfs(numbers[0], 1)
    dfs(-numbers[0], 1)

    return cnt