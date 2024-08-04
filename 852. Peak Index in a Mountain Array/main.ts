function peakIndexInMountainArray(arr: number[]): number {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] < arr[mid + 1]) {
            if (arr[mid - 1] < arr[mid]) {
                // find right part
                left = mid;
            } else {
                return mid;
            }
        } else {
            if (arr[mid - 1] > arr[mid]) {
                // find left part
                right = mid;
            } else {
                return mid;
            }
        }
    }

    return -1;
};
