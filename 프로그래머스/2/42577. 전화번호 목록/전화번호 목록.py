def solution(phone_book):
    dict = {}

    for num in phone_book:
        dict[num] = 1

    for num in phone_book:
        temp = ""
        
        for n in num:
            temp += n
            
            if temp in dict and num != temp:
                return False

    return True