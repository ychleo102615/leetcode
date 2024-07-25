class KthLargest {
    private queue: number[];
    private k: number;
    constructor(k: number, nums: number[]) {
        this.queue = [];
        this.k = k;
        // for (let i = 0; i < nums.length; i++) {
        //     this.queue.splice(this.lowBound(nums[i]), 0, nums[i]);
        // }
        // this.queue.splice(0, nums.length - k);

        if (k > nums.length) {
            k = nums.length;
        }
        for (let i = 0; i < k; i++) {
            this.queue.splice(this.lowBound(nums[i]), 0, nums[i]);
        }
        for (let i = k; i < nums.length; i++) {
            this.add(nums[i]);
        }
        // console.log(this.queue);
    }

    add(val: number): number {
        this.queue.splice(this.lowBound(val), 0, val);
        if (this.queue.length > this.k) {
            this.queue.splice(0, 1);
        }
        return this.queue[0];
    }

    private lowBound(val: number): number {
        let start = 0;
        let end = this.queue.length;

        while (start < end) {
            let mid = Math.floor((start + end) / 2);

            if (this.queue[mid] <= val) {
                start = mid + 1;
            } else {
                end = mid;
            }
        }
        return start;
    }
}
