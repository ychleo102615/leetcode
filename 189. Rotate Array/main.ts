/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    k = k % nums.length;
    const rear = nums.slice(nums.length - k);
    nums.splice(nums.length - k, k);
    nums.splice(0, 0, ...rear);
};
