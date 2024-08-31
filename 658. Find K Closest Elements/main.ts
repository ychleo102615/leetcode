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

    let left = lowBound(x + 1) - 1;
    let right = left + 1;
    let ans: number[] = [];
    console.log("left, right:", left, right);

    while (ans.length < k) {
        if (left < 0) {
            console.log("use right")
            // use right
            ans.push(...arr.slice(right, right + k - ans.length));
            break;
        } else if (right >= arr.length) {
            console.log("use left")
            // use left
            ans.splice(0, 0, ...arr.slice(left + 1 - (k - ans.length), left + 1));
            break;
        }


        if (x - arr[left] <= arr[right] - x) {
            // ans.push(arr[left]);
            ans.splice(0, 0, arr[left]);
            left--;
        } else {
            ans.push(arr[right]);
            right++;
        }
    }

    console.log("ans", ans);


    return ans;
};
