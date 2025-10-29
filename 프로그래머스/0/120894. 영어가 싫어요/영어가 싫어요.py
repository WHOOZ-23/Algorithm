def solution(numbers):
    num_list = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

    for (i, num) in enumerate(num_list):
        numbers = numbers.replace(num, str(i))

    return int(numbers)