def solution(order):
    return len([ch for ch in str(order) if ch in "369"])