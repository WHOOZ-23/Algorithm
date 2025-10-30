def solution(polynomial):
    polynomial = polynomial.split()[::2]
    i, j = 0, 0

    for k in polynomial:
        if 'x' in k:
            if k == 'x':
                i += 1
            else:
                i += int(k[:-1])
        else:
            j += int(k)

    if i == 1 and j == 0:
        return "x"
    elif i == 1 and j > 0:
        return f"x + {j}"
    elif j == 0:
        return f"{i}x"
    elif i == 0:
        return f"{j}"
    else:
        return f"{i}x + {j}"