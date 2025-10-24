def solution(num_list):
    arr = [0, 0]

    for num in num_list:
        arr[num % 2] += 1

    return arr