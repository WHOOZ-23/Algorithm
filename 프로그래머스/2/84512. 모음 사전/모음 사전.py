def solution(word):
    vowels = ['A', 'E', 'I', 'O', 'U']
    cnt = 0

    def words(w):
        nonlocal cnt

        if w == word:
            return True

        if len(w) == 5:
            return False

        for v in vowels:
            w += v
            cnt += 1

            if words(w):
                return True

            w = w[:-1]

    words("")

    return cnt