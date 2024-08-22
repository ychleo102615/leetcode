function findMaximumXOR(nums: number[]): number {
    let curMax = 0;
    let prefixMask = 0;

    for (let i = 31; i >= 0; i--) {
        prefixMask = prefixMask | 1<<i;
        const prefixSet = new Set<number>();
        nums.forEach(num => prefixSet.add(prefixMask & num));

        const expect = curMax | 1<<i;
        prefixSet.forEach(prefix => {
            if (prefixSet.has(expect ^ prefix)) {
                curMax = expect;
            }
        });
        for (let prefix of prefixSet) {
            if (prefixSet.has(expect ^ prefix)) {
                curMax = expect;
                break;
            }
        }
    }

    return curMax;
};

