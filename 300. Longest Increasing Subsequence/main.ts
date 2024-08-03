function lengthOfLIS(nums: number[]): number {
    const record: number[] = [nums[0]];

    const lowerbound = function(val: number): number {
        let left = 0;
        let right = record.length - 1;

        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            // console.log(mid, left, right)
            if (record[mid] < val) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        return left;
    }

    for (let i = 1; i < nums.length; i++) {
        if (record[record.length-1] < nums[i]) {
            record.push(nums[i]);
        } else {
            record.splice(lowerbound(nums[i]), 1, nums[i]);
        }
    }

    return record.length;
};

// function lengthOfLISN2(nums: number[]): number {
//     let maxLen = -1;
//     const longestAtEach: number[] = new Array(nums.length).fill(-1);
//
//
//     for (let i = nums.length - 1; i >= 0; i--) {
//         let max = 0;
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[j] > nums[i] && longestAtEach[j] > max) {
//                 max = longestAtEach[j];
//             }
//         }
//         longestAtEach[i] = max + 1;
//         if (longestAtEach[i] > maxLen) {
//             maxLen = longestAtEach[i];
//         }
//     }
//
//     return maxLen;
// };
