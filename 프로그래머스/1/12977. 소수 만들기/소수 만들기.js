function solution(nums) {
    nums.sort((a, b) => b-a);
    
    const len = nums[0]+nums[1]+nums[2];
    let arr = Array(len+1).fill(true);

    arr[0] = arr[1] = false;

    for(let i=2; i*i<=len; i++) {
        if(arr[i]) {
            for(let j=i*i; j<=len; j+=i) {
                arr[j] = false;
            }
        }
    }
    
    let cnt = 0;
    
    for(let i=0; i<nums.length-2; i++) {
        for(let j=i+1; j<nums.length-1; j++) {
            for(let k=j+1; k<nums.length; k++) {
                if(arr[nums[i]+nums[j]+nums[k]]) {
                    cnt++;
                }
            }
        }
    }
    
    return cnt;
}