def solution(numbers):
    num = sorted(list(map(str, numbers)), key=lambda x : (x * 3)[:4], reverse=True)
    return "0" if num[0] == "0" else "".join(num)