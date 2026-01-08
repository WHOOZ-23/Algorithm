def solution(citations):
    citations.sort(reverse=True)
    return max(min(i, c) for i, c in enumerate(citations, start=1))