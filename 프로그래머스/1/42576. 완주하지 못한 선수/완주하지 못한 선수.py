def solution(participant, completion):
    dict = {}

    for i, person in enumerate(participant):
        dict[person] = dict.get(person, 0) + 1
        if i < len(completion):
            dict[completion[i]] = dict.get(completion[i], 0) - 1

    for key, value in dict.items():
        if value > 0:
            return key
