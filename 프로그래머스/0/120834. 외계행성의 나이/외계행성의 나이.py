def solution(age):
    return "".join(chr(97 + int(i)) for i in list(str(age)))