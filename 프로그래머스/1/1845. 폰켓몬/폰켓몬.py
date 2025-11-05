def solution(nums):
    ponkemon_type = {}

    for num in nums:
        ponkemon_type[num] = ponkemon_type.get(num, 0) + 1

    return min(len(ponkemon_type.keys()), len(nums) // 2)