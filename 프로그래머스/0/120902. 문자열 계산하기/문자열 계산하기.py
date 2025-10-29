def solution(my_string):
    lst = my_string.split()
    answer = int(lst[0])

    for i in range(2, len(lst), 2):
        if lst[i - 1] == '+':
            answer += int(lst[i])
        elif lst[i - 1] == '-':
            answer -= int(lst[i])

    return answer