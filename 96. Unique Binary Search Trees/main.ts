function numTrees(n: number): number {
    // structCount
    let stCount: number[] = new Array(n);
    stCount[0] = 1;
    let comb = 0;
    for (let i = 1; i < n; i++) {
        // if (i == 0) {
        //     continue;
        // }
        // let count = i + 1;
        // let subTreeSum = count - 1;
        // let subTreeSum = i;
        //console.log("in count:" + count);

        comb = 0;
        // count subTree
        // for (let j = 0; j <= i; j++) {
        //     // index is actual count - 1
        //     // let leftCount = (j-1 < 0) ? 1 : stCount[j-1];
        //     // let rightCount = (subTreeSum - j - 1 < 0) ? 1 : stCount[subTreeSum-j-1];
        //     // comb += leftCount * rightCount;
        //     comb += ((j-1 < 0) ? 1 : stCount[j-1]) * ((i-j-1 < 0) ? 1 : stCount[i-j-1]);
        //     //console.log("j: " + j + "/" + subTreeSum + " " + leftCount + "  " + rightCount);
        // }
        comb += stCount[i-1] * 2;
        for (let j = 1; j < i; j++) {
            comb += stCount[j-1] * stCount[i-j-1];
        }
        stCount[i] = comb;
    }
    //console.log(stCount);
    return stCount[n-1];
};
