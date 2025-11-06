import math


def solution(clothes):
    closet = {}

    for cloth, type in clothes:
        if type not in closet:
            closet[type] = []

        closet[type].append(cloth)

    return math.prod([len(num) + 1 for num in closet.values()]) - 1