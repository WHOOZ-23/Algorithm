def solution(score):
    avg_list = [sum(s) / len(s) for s in score]
    ranks = [sorted(avg_list, reverse=True).index(s) + 1 for s in avg_list]
    return ranks