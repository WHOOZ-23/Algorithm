function solution(nums) {
    const x = new Set(nums).size;
    
    return x<nums.length/2 ? x : nums.length/2;
}