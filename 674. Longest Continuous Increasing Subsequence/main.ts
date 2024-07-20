function findLengthOfLCIS(nums: number[]): number {
    let longest = 1;
    let start = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= nums[i-1]) {
            if (i - start > longest) {
                longest = i - start;
            }
            start = i;
        }
    }
    if (nums.length - start > longest) {
        return nums.length - start;
    }
    return longest;
};
