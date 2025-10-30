def solution(my_string):
    num_list = "".join(s if s.isdigit() else ' ' for s in my_string).split()
    return sum(int(num) for num in num_list)