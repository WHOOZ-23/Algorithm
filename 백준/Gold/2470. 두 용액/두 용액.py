n = int(input())
arr = list(map(int, input().split()))
arr.sort()

left, right = 0, len(arr) - 1
answer = [arr[left], arr[right]]
result = abs(arr[left] + arr[right])

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