def solution(spell, dic):
    check_list = [0 for r in range(0, len(dic))]

    for i, word in enumerate(dic):
        for s in spell:
            if s not in word:
                check_list[i] = 2
                break
            else:
                check_list[i] = 1

    return min(check_list)