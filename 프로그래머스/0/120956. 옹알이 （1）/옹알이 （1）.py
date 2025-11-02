def solution(babbling):
    babbling_set = {"aya", "ye", "woo", "ma"}
    cnt = 0

    for b in babbling:
        for c in babbling_set:
            if c in b:
                b = b.replace(c, " ")

        if b.isspace():
            cnt += 1

    return cnt