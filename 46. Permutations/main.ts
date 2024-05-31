function permute(nums: number[]): number[][] {
    const result: number[][] = [];

    let pickOne = function(current: number[], left: number[]) {
        if (left.length == 0) {
            result.push(current);
            return;
        }

        for (let i = 0; i < left.length; i++) {
            let nextCurrent = current.slice();
            nextCurrent.push(left[i]);
            let nextLeft = left.slice();
            nextLeft.splice(i, 1);
            pickOne(nextCurrent, nextLeft);
        }
    }
    pickOne([], nums);


    return result;
};
