function findDisappearedNumbers(nums: number[]): number[] {
    const disappeared: number[] = [];

    let temp: number;
    for (let i = 0; i < nums.length; i++) {
        if (nums[nums[i]-1] != nums[i]) {
            temp = nums[i];
            nums[i] = nums[temp-1];
            nums[temp-1] = temp;
            i--;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != i + 1) {
            disappeared.push(i+1);
        }
    }

    return disappeared;
};
