function largestNumber(nums: number[]): string {
    const strnums = nums.map(n => n.toString());
    strnums.sort((a, b) => {
        let i = 0;
        while (true) {
            if (i == a.length && i == b.length) {
                return 0;
            } else if (i == a.length) {
                // 想像這個例子: a = 53, b = 535
                // 等意於 a = 53, b = 5 ，因為開頭都必為53了
                b = b.slice(i);
                i = 0;
                continue;
            } else if (i == b.length) {
                a = a.slice(i);
                i = 0;
                continue;
            }
            if (a[i] == b[i]) {
                i++;
                continue;
            }
            return a[i] > b[i] ? -1 : 1;
        }
    })
    if (parseInt(strnums.join("")) == 0) {
        return "0"
    }
    return strnums.join("");
};
