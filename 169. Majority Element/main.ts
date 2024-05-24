function majorityElement(nums: number[]): number {

    // let quota = Math.ceil(nums.length / 2);
    // const countMap = new Map<number, number>();
    // for (let i = 0; i < nums.length; i++) {
    //     if (countMap.has(nums[i])) {
    //         countMap.set(nums[i], countMap.get(nums[i])+1);
    //     } else {
    //         countMap.set(nums[i], 1);
    //     }
    //     if (countMap.get(nums[i]) >= quota) {
    //         return nums[i];
    //     }
    // }
    // return -1;

    let candidate = nums[0];
    let count = 1;

    for (let i = 1; i < nums.length; i++) {
        if (count == 0) {
            candidate = nums[i];
            count = 1;
            continue;
        }
        if (nums[i] != candidate) {
            count--;
        } else {
            count++;
        }
    }

    return candidate;
};
