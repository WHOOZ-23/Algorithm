def solution(nums):
    ponkemon_type = {}

    for num in nums:
        ponkemon_type[num] = ponkemon_type.get(num, 0) + 1

    return len(nums) // 2 if len(ponkemon_type.keys()) > len(nums) // 2 else len(ponkemon_type.keys())