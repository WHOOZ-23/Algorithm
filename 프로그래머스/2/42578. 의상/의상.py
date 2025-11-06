import math


def solution(clothes):
    closet = {}

    for _, type in clothes:
        closet[type] = closet.get(type, 1) + 1

    return math.prod(closet.values()) - 1