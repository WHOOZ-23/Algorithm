N, M = map(int, input().split())

arr = []

for i in range(1, N+1):
    arr.append(i)
    
for i in range(M):
    i, j = map(int, input().split())
    temp = arr[i-1:j]
    temp.reverse()
    arr[i-1:j] = temp
    
for i in range(N):
    print(arr[i], end = ' ')