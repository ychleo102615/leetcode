function searchRange(nums: number[], target: number): number[] {
    let left = 0;
    let right = nums.length - 1;

    let mid: number;
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (nums[mid] == target) {
            // found
            break;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    if (left > right) {
        return [-1, -1];
    }


    // find start
    let startRight = mid!;


    while (left < startRight) {
        let startMid = Math.floor((left+startRight) / 2);
        if (nums[startMid] == target) {
            // startRight = startMid - 1;
            startRight = startMid;
        } else {
            left = startMid + 1;
            if (nums[left] == target) {
                break;
            }
        }
    }

    // find end
    let endLeft = mid!;

    while (endLeft < right) {
        let endMid = Math.ceil((endLeft+right) / 2);
        if (nums[endMid] == target) {
            endLeft = endMid;
        } else {
            right = endMid - 1;
            if (nums[right] == target) {
                break;
            }
        }
    }

    return [left, right];
};
