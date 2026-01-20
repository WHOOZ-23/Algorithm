def solution(answers):
    s1, s2, s3 = [1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    cnt = [0, 0, 0]
    answer = []

    for i, a in enumerate(answers):
        if a == s1[i % len(s1)]:
            cnt[0] += 1
        if a == s2[i % len(s2)]:
            cnt[1] += 1
        if a == s3[i % len(s3)]:
            cnt[2] += 1

    max_score = max(cnt)

    for i, c in enumerate(cnt):
        if c >= max_score:
            answer.append(i + 1)
            
    return answer