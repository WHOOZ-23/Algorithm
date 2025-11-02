import math


def solution(a, b):
    denom = b // math.gcd(a, b)

    while denom > 1:
        if denom % 2 == 0:
            denom //= 2
        elif denom % 5 == 0:
            denom //= 5
        else:
            break

    return 1 if denom == 1 else 2