function numDistinct(s: string, t: string): number {
    // const myMap: Map<number, number>[] = Array.from(new Array(s.length), () => new Map<number, number>());
    const anoMap = new Map<number, Map<number, number>>();
    // const array = Array.from(new Array(s.length + 1), () => new Array<number>(t.length + 1));
    // array[s.length].fill(0);
    // array[s.length][t.length] = 1;
    // for (let i = 0; i <= s.length; i++) {
    //     array[i][t.length] = 1;
    // }

    function findSubString(sIndex: number, tIndex: number): number {
        if (tIndex == t.length) {
            return 1;
        }
        if (sIndex === s.length) {
            return 0;
        }
        // let result = myMap[sIndex].get(tIndex);
        let thisMap = anoMap.get(sIndex);
        if (thisMap === undefined) {
            thisMap = new Map<number, number>();
            anoMap.set(sIndex, thisMap);
        }
        let result = thisMap.get(tIndex);

        if (result !== undefined) {
            return result;
        }

        result = findSubString(sIndex + 1, tIndex);
        if (s[sIndex] === t[tIndex]) {
            result += findSubString(sIndex + 1, tIndex + 1);
        }
        // myMap[sIndex].set(tIndex, result);
        thisMap.set(tIndex, result);
        return result;
    }
    return findSubString(0, 0);
};
