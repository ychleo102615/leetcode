function countBits(n: number): number[] {
    const ans: number[] = [];

    let leftestOneVal = 0
    for (let i = 0; i <= n; i++) {
        if (i >= leftestOneVal << 1) {
            leftestOneVal = i;
            ans.push(i > 0 ? 1 : 0);
        } else {
            ans.push(1 + ans[i - leftestOneVal]);
        }
    }

    return ans;
};
