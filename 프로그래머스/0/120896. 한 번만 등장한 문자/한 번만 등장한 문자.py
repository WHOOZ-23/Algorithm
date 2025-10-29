def solution(s):
    result = []

    for ch in s:
        if s.count(ch) == 1:
            result.append(ch)

    return "".join(sorted(result))