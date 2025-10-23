def solution(money):
    americano, change = divmod(money, 5500)
    return [americano, change]