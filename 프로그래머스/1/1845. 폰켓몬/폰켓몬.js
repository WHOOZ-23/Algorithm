function solution(nums) {
    const x = [...new Set(nums)].length;
    
    return x<nums.length/2 ? x : nums.length/2;
}