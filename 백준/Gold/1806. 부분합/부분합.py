N, S = map(int, input().split())
arr = list(map(int, input().split()))

left = 0
total = 0
answer = float('inf')

for right in range(N):
    total += arr[right]

    while S <= total:
        answer = min(answer, right - left + 1)
        total -= arr[left]
        left += 1


print(answer if answer != float('inf') else 0)
