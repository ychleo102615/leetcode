function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    m--;
    n--;
    while (m >= 0 && n >= 0) {
        if (nums1[m] > nums2[n]) {
            nums1[m+n+1] = nums1[m];
            m--;
        } else {
            nums1[m+n+1] = nums2[n];
            n--;
        }
    }
    if (n >= 0) {
        for (let i = 0; i <= n; i++) {
            nums1[i] = nums2[i];
        }
    }
};
