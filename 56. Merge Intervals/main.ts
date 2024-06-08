function merge(intervals: number[][]): number[][] {
    const sorted: number[][] = [];
    function findLowerBound(target: number): number {
        let left = 0;
        let right = sorted.length;
        while (left < right) {
            const middle = Math.floor((left + right) / 2);
            if (target <= sorted[middle][0] || target <= sorted[middle][1]) {
                right = middle;
            } else {
                left = middle + 1;
            }
        }
        return left;
    }

    for (let i = 0; i < intervals.length; i++) {
        const target = intervals[i];
        const lowerBound = findLowerBound(target[0]);
        let search = lowerBound;
        while (search < sorted.length) {
            // combine target if needed
            if (target[1] < sorted[search][0]) {
                break;
            }
            // combine, search stay at the same value
            const toBeCombined = sorted.splice(search, 1)[0];
            target[0] = target[0] < toBeCombined[0] ? target[0] : toBeCombined[0];
            target[1] = target[1] > toBeCombined[1] ? target[1] : toBeCombined[1];
        }
        sorted.splice(lowerBound, 0, target);
        // console.log("sorted:", sorted)
    }

    return sorted;
};
