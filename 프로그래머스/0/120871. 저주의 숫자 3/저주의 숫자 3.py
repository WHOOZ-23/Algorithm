def solution(n):
    return [num for num in range(1, n*3) if num % 3 != 0 and '3' not in str(num)][n-1]