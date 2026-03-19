def solution(word):
    vowels = ['A', 'E', 'I', 'O', 'U']
    weights = [781, 156, 31, 6, 1]
    cnt = 0

    for i, w in enumerate(word):
        cnt += vowels.index(w) * weights[i] + 1

    return cnt