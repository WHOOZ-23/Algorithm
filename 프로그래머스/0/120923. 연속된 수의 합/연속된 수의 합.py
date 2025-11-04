def solution(num, total):
    if num % 2 == 0:
        median1 = total // num
        median2 = total // num + 1
        
        return list(range(median1 - (num - 2) // 2, median2 + (num - 2) // 2 + 1))
    else:
        median = total // num
        
        return list(range(median - (num - 1) // 2, median + (num - 1) // 2 + 1))