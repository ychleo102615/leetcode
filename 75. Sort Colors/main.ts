/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    let left = -1;
    let right = nums.length;
    let i = 0;
    let temp: number;

    while (i < right) {
        // console.log("status: ", i, left, right)
        if (nums[i] == 0) {
            // swap with left's next, which is usually "1"
            left++;
            temp = nums[left];
            nums[left] = nums[i];
            nums[i] = temp;
            i++;
            // console.log("0 to left")
        } else if (nums[i] == 1) {
            i++;
        } else {
            // nums[i] == 2
            right--;
            temp = nums[right];
            nums[right] = nums[i];
            nums[i] = temp;
            // console.log("2 to right")
        }
    }
    // console.log("i, right", i, right)

};
