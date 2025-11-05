def solution(participant, completion):
    dict = {}

    for person in participant:
        dict[person] = dict.get(person, 0) + 1

    for person in completion:
       dict[person] = dict.get(person) - 1

    for key, value in dict.items():
        if value > 0:
            return key