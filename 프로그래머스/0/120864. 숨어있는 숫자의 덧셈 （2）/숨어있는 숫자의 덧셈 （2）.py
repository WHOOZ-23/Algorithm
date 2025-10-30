import re


def solution(my_string):
    return sum(int(num) for num in re.split(r'\D+', my_string) if num != '')