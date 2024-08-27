function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
    const targetSet = new Set<number>();
    const targetCount = new Map<number, number>();
    const len = nums1.length;
    let count = 0;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            const target = nums1[i] + nums2[j];
            // targetSet.add(nums1[i] + nums2[j]);
            if (targetSet.has(target)) {
                targetCount.set(target, targetCount.get(target)! + 1);
            } else {
                targetSet.add(target);
                targetCount.set(target, 1);
            }
        }
    }

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            const target = -(nums3[i] + nums4[j]);
            if (targetSet.has(target)) {
                count += targetCount.get(target)!;
            }
        }
    }


    return count;
};
