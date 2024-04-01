function findLadders(beginWord: string, endWord: string, wordList: string[]): string[][] {
    if (wordList.includes(beginWord)) {
        wordList.splice(wordList.indexOf(beginWord), 1);
    }
    wordList.splice(0, 0, beginWord);
    const paths: string[][] = [];

    const endIndex = wordList.indexOf(endWord);
    if (endIndex === -1) {
        return paths;
    }

    const pathIndexTable: number[][][] = Array.from(Array(wordList.length), () => []);

    const bfsList: number[] = [0]; // index of begin word
    let bfsLength = 1;
    pathIndexTable[0].push([0]);

    const candidates = Array.from(Array(wordList.length).keys());
    candidates.splice(0, 1);

    while (bfsLength > 0) {
        // console.log("bfs: ", bfsList.map(x => wordList[x]));
        // console.log("cand: ", candidates.map(x => wordList[x]));
        // if (candidates.length === 0) {
        //     console.log("error")
        //     break;
        // }
        for (let i = 0; i < bfsLength; i++) {
            const cur = bfsList[i];

            for (let j = candidates.length - 1; j >= 0; j--) {
                const target = candidates[j];

                if (!isReachable(wordList[cur], wordList[target])) {
                // if (getDiffCount(wordList[cur], wordList[target]) !== 1) {
                    continue;
                }

                const pathIndices = pathIndexTable[cur];
                for (let k = 0; k < pathIndices.length; k++) {
                    const newPath = pathIndices[k].slice();
                    newPath.push(target);
                    pathIndexTable[target].push(newPath);
                }

                if (!bfsList.includes(target)) {
                    bfsList.push(target);
                }
            }
        }
        bfsList.splice(0, bfsLength);
        bfsLength = bfsList.length;
        bfsList.sort();
        for (let i = 0; i < bfsList.length; i++) {
            candidates.splice(candidates.indexOf(bfsList[i]), 1);
        }

        if (pathIndexTable[endIndex].length > 0 ) {
            break;
        }
    }
    /*
        * [["aaaaa","aaaaz","aaawz","aavwz","avvwz","vvvwz","vvvww","wvvww","wwvww","wwwww","ywwww","yywww","yyyww","yyyyw","yyyyy","xyyyy","xxyyy","xxxyy","xxxxy","xxxxx","gxxxx","ggxxx","gggxx","ggggx","ggggg"]]
        * */

    for (let i = 0; i < pathIndexTable[endIndex].length; i++) {
        paths.push(pathIndexTable[endIndex][i].map(x => wordList[x]));
    }

    return paths;
};

function isReachable(a: string, b: string): boolean {
    let gotOne: boolean | null = null;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            if (gotOne !== null) {
                return false;
            }
            gotOne = true;
        }
    }
    return gotOne == true;
}

function getDiffCount(a: string, b: string): number {
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            count++;
        }
    }
    return count;
}
