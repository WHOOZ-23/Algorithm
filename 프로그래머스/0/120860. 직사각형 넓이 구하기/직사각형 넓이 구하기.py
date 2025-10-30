def solution(dots):
    w_list = []
    h_list = []

    for dot in dots:
        w_list.append(dot[0])
        h_list.append(dot[1])

    return (max(w_list) - min(w_list)) * (max(h_list) - min(h_list))