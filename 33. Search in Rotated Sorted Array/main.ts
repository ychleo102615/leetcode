function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let midi = Math.floor((left + right) / 2);
        let midv = nums[midi];

        // 這是高明的地方，如果先把midv比較過後，之後就不用擔心把答案遺漏在檢查範圍之外了
        if (midv == target) {
            return midi;
        }

        // 為什麼是這邊 <= ，而不是 nums[right] >= midv 呢？
        // 大概是因為通常 middle = (left + right) / 2 ，偶數長度取左邊
        if (nums[left] <= midv) {
            // left side sorted
            if (nums[left] <= target && target < midv) {
                right = midi - 1;
            } else {
                left = midi + 1;
            }
        } else {
            // right side sorted
            if (midv < target && target <= nums[right]) {
                left = midi + 1;
            } else {
                right = midi - 1;;
            }
        }

        /*
        if (pivot > nums[right]) {
            // still rotated
            // if (pivot == target) {
            //     return left;
            // }

            if (pivot > midv) {
                if (target >= pivot || target < midv) {
                    right = midi - 1;
                } else {
                    left = midi + 1;
                }
            } else if (pivot < midv) {
                if (target > midv || target < pivot) {
                    left = midi + 1;
                } else {
                    right = midi - 1;;
                }

            } else {
                // pivot == midv
                if (pivot < target) {
                    left = midi + 1;
                } else {

                }
            }







            continue;
        }

        if (midv < target) {
            left = midi + 1;
        } else if (midv > target) {
            right = midi - 1;
        } else {
            return midi;
        }
        */
    }

    return -1;
};
