import math
from itertools import permutations


def solution(numbers):
    primes = set()

    for l in range(1, len(numbers) + 1):
        for p in permutations(numbers, l):
            num = int(''.join(p))

            if is_prime(num):
                primes.add(num)

    return len(primes)

def is_prime(n):
    if n <= 1:
        return False

    for i in range(2, int(math.sqrt(n)) + 1):
        if n % i == 0:
            return False

    return True