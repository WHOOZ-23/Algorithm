T = int(input())

dp = [0 for _ in range(T + 1)]

for i in range(1, T + 1):
    dp[i] = dp[i - 1] + i

print(dp[-1])