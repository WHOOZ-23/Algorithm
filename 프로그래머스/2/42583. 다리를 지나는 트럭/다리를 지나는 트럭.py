def solution(bridge_length, weight, truck_weights):
    wait_list = [t for t in truck_weights]
    cross_list = []
    check_list = []
    pass_list = []
    second = 0

    while len(pass_list) < len(truck_weights):
        if len(check_list) > 0 and check_list[0] == 0:
            pass_list.append(cross_list.pop(0))
            check_list.pop(0)

        if len(wait_list) > 0 and sum(cross_list) + wait_list[0] <= weight:
            cross_list.append(wait_list.pop(0))
            check_list.append(bridge_length)

        second += 1
        check_list = list(map(lambda x: x-1, check_list))

    return second