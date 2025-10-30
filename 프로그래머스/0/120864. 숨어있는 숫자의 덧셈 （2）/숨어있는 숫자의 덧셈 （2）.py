def solution(my_string):
    return sum(int(num) for num in "".join(s if s.isdigit() else ' ' for s in my_string).split())