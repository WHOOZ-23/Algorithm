N, M = map(int, input().split())
arr = list(map(int, input().split()))

prefix = list(0 for _ in range(N + 1))
result = []

for i in range(N):
    prefix[i + 1] = prefix[i] + arr[i]

for _ in range(M):
    i, j = map(int, input().split())

    result.append(prefix[j] - prefix[i - 1])

print('\n'.join(map(str, result)))