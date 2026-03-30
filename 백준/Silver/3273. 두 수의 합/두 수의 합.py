n = int(input())
arr = list(map(int, input().split()))
x = int(input())

left, right = 0, n - 1
cnt = 0

arr.sort()

while left < right:
    total = arr[left] + arr[right]

    if total == x:
        cnt += 1

    if total < x:
        left += 1
    else:
        right -= 1

print(cnt)