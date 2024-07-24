function findKthLargest(nums: number[], k: number): number {

    // let reverse = k > nums.length / 2;
    // k = nums.length - k - 1;

    let temp: number;
    // build heap, start from the n
    let lastNodeHasChild = Math.floor(nums.length / 2) - 1;

    // console.log("build heap")
    for (let i = lastNodeHasChild; i >= 0; i--) {
        // compare node with child
        // console.log("check node: ", i);

        let j = i;
        let next = -1;
        while (j <= lastNodeHasChild) {
            // console.log("j:", j)
            if (nums[(j<<1)+2] == undefined) {
                // console.log("undefined at", (j<<1)+2)
                if (nums[j] < nums[(j<<1)+1]) {
                    next = (j<<1)+1;
                    temp = nums[j];
                    nums[j] = nums[next];
                    nums[next] = temp;
                }
            } else {
                if (nums[j] < nums[(j<<1)+1] || nums[j] < nums[(j<<1)+2]) {
                    next = nums[(j<<1)+1] > nums[(j<<1)+2] ? (j<<1)+1 : (j<<1)+2;
                    temp = nums[j];
                    nums[j] = nums[next];
                    nums[next] = temp;
                }
            }
            if (j == next) {
                break;
            }

            j = next;
            // console.log("next:", next)
        }
    }
    // console.log("nums", nums);

    // console.log("pop")
    let max = 0;
    for (let i = 0; i < k; i++) {
        max = nums[0];
        nums[0] = nums.pop()!;
        lastNodeHasChild = Math.floor(nums.length / 2) - 1;

        let j = 0;
        let next = -1;
        while (j <= lastNodeHasChild) {
            // console.log("j:", j)
            if (nums[(j<<1)+2] == undefined) {
                // console.log("undefined at", (j<<1)+2)
                if (nums[j] < nums[(j<<1)+1]) {
                    next = (j<<1)+1;
                    temp = nums[j];
                    nums[j] = nums[next];
                    nums[next] = temp;
                }
            } else {
                if (nums[j] < nums[(j<<1)+1] || nums[j] < nums[(j<<1)+2]) {
                    next = nums[(j<<1)+1] > nums[(j<<1)+2] ? (j<<1)+1 : (j<<1)+2;
                    temp = nums[j];
                    nums[j] = nums[next];
                    nums[next] = temp;
                }
            }
            if (j == next) {
                break;
            }

            j = next;
            // console.log("next:", next)
        }
    }
    return max;
};
