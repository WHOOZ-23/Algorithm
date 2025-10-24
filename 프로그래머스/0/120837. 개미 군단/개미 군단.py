def solution(hp):
    attack = [5, 3, 1]
    ants = []

    for a in attack:
        ants.append(hp // a)
        hp %= a

    return sum(ants)