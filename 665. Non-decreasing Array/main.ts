function checkPossibility(nums: number[]): boolean {
    let shouldBeBig = -1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i-1] > nums[i]) {
            if (shouldBeBig < 0) {
                shouldBeBig = i;
            } else {
                return false;
            }
        }
    }
    if (shouldBeBig < 0) {
        return true;
    }
    // either modify shoudBeBig - 1 or shouldBeBig
    // modify shouldBeBig - 1 smaller
    if (shouldBeBig - 2 >= 0) {
        if (nums[shouldBeBig - 2] <= nums[shouldBeBig]) {
            return true;
        }
    } else {
        return true;
    }

    // modify shouldBeBig bigger
    if (shouldBeBig + 1 < nums.length) {
        if (nums[shouldBeBig - 1] <= nums[shouldBeBig + 1]) {
            return true;
        }
    } else {
        return true;
    }

    return false;
};
