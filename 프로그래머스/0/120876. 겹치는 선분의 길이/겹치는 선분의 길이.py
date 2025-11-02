def solution(lines):
    line_list = [set(range(line[0], line[1])) for line in lines]
    return len(line_list[0] & line_list[1] | line_list[1] & line_list[2] | line_list[0] & line_list[2])