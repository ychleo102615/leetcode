function numDistinct(s: string, t: string): number {
    const array = Array.from(new Array(s.length + 1), () => new Array<number>(t.length + 1));
    array[s.length].fill(0);
    array[s.length][t.length] = 1;
    for (let i = 0; i <= s.length; i++) {
        array[i][t.length] = 1;
    }

    // let col;
    // const array = Array.from(Array(s.length + 1).keys(), x => {
    //     col = new Array<number>(t.length + 1);
    //     if (x == s.length) {
    //         col.fill(0);
    //     }
    //     col[t.length] = 1;
    //     return col;
    // })

    function findSubString(sIndex: number, tIndex: number): number {
        if (array[sIndex][tIndex] === undefined) {
            array[sIndex][tIndex] = findSubString(sIndex + 1, tIndex) + (s[sIndex] === t[tIndex] ? findSubString(sIndex + 1, tIndex + 1) : 0);
        }
        return array[sIndex][tIndex];
    }
    return findSubString(0, 0);
};
