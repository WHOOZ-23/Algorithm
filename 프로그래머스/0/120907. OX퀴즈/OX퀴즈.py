def solution(quiz):
    answer = []

    for expression in quiz:
        lst = expression.split()

        if lst[1] == '+':
            if int(lst[0]) + int(lst[2]) == int(lst[4]):
                answer.append("O")
            else:
                answer.append("X")
        elif lst[1] == '-':
            if int(lst[0]) - int(lst[2]) == int(lst[4]):
                answer.append("O")
            else:
                answer.append("X")

    return answer