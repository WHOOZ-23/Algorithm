def solution(numbers, k):
    ball_list = (numbers*2)[::2]
    
    return ball_list[k % len(ball_list) - 1]