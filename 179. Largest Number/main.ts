function largestNumber(nums: number[]): string {
    const strnums = nums.map(n => n.toString());
    strnums.sort((a, b) => {
        return a + b > b + a ? -1 : 1;
    })
    if (strnums[0] == "0") return "0";
    return strnums.join("");
};
