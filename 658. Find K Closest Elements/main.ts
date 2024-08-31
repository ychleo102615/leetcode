function findClosestElements(arr: number[], k: number, x: number): number[] {

    function lowBound(value: number): number {
        let left = 0;
        let right = arr.length;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] >= value) {
                // aim here
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }
    function upBound(value: number): number {
        let left = 0;
        let right = arr.length;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] > value) {
                // aim here
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }


    let left = lowBound(x);
    let right = upBound(x);

    while (right - left < k) {
        if (left - 1 < 0) {
            // use right
            // console.log("use right")
            right = left + k;
            break;
        } else if (right >= arr.length) {
            // use left
            // console.log("use left")
            left = right - k;
            break;
        }
        if (x - arr[left - 1] <= arr[right] - x) {
            left--;
        } else {
            right++;
        }
    }

    return arr.slice(left, left + k)
};
