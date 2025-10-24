def solution(emergency):
    sorted_emergency = sorted(emergency, reverse=True)

    emergency_dict = {val: rank + 1 for rank, val in enumerate(sorted_emergency)}

    return [emergency_dict[i] for i in emergency]