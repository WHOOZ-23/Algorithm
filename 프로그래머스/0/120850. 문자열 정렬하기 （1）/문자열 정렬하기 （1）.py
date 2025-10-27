import re


def solution(my_string):
    num = re.sub('[a-z]', '', my_string)
    return sorted(int(n) for n in num)