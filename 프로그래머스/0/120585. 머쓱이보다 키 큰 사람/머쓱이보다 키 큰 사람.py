def solution(array, height):
    return len([x for x in sorted(array) if height < x])