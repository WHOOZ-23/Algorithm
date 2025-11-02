def solution(lines):
    line1 = set(range(lines[0][0], lines[0][1])) & set(range(lines[1][0], lines[1][1]))
    line2 = set(range(lines[1][0], lines[1][1])) & set(range(lines[2][0], lines[2][1]))
    line3 = set(range(lines[0][0], lines[0][1])) & set(range(lines[2][0], lines[2][1]))

    return len(line1 | line2 | line3)