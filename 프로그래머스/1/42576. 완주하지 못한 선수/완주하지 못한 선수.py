from collections import Counter


def solution(participant, completion):
    people = Counter(participant) - Counter(completion)
    return list(people.keys())[0]