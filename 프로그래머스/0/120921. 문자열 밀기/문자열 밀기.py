def solution(A, B):
    cnt = 0

    while cnt < len(A):
        if A == B:
            return cnt

        A = A[-1:] + A[:-1]

        cnt += 1

    return -1