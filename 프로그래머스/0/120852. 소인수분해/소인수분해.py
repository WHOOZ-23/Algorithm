def solution(n):
    i = 2
    result = []

    while i <= n:
        if n % i == 0:
            result.append(i)
            n //= i
        else:
            i += 1

    return list(sorted(set(result)))