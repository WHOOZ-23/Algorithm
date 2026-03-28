n = int(input())
arr = list(map(int, input().split()))
arr.sort()

answer = [0, 0]
left, right = 0, len(arr) - 1
result = float('inf')

while left < right:
    mix = arr[left] + arr[right]

    if abs(mix) < result:
        result = abs(mix)
        answer = arr[left], arr[right]

    if mix < 0:
        left += 1
    elif mix > 0:
        right -= 1
    else:
        break

print(answer[0], answer[1])