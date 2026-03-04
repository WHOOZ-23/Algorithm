def solution(name):
    up_down = 0

    for n in name:
        up_down += min(ord(n) - ord('A'), ord('Z') - ord(n) + 1)
        
    left_right = len(name) - 1

    for i in range(len(name)):
        next_idx = i + 1

        while next_idx < len(name) and name[next_idx] == 'A':
            next_idx += 1

        left_right = min(left_right, 2 * i + len(name) - next_idx, i + 2 * (len(name) - next_idx))
        
    return up_down + left_right