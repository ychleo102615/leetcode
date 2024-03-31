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

    const stepCountTable: number[][]  = Array.from(Array(wordList.length), () => new Array(wordList.length).fill(-1));
    const reachableMap: Map<number, number[]> = new Map<number, number[]>();

    const pathIndexTable: number[][][] = Array.from(Array(wordList.length), () => []);

    const bfsList: number[] = [0]; // index of begin word
    let bfsLength = 1;
    // pathIndexTable.push([[0]]);
    pathIndexTable[0].push([0]);

    // console.log(endIndex, pathIndexTable.length)


    while (bfsLength > 0) {
        for (let i = 0; i < bfsLength; i++) {
            const cur = bfsList[i];
            // console.log("WORD[" + wordList[cur] + "], id:  " + cur);

            if (!reachableMap.has(cur)) {
                const reachable: number[] = [];
                const searchRow = stepCountTable[cur];
                for (let j = 0; j < searchRow.length; j++) {
                    if (cur === j) {
                        continue;
                    }
                    if (searchRow[j] < 0) {
                        searchRow[j] = getDiffCount(wordList[cur], wordList[j]);
                        stepCountTable[j][cur] = searchRow[j];
                    }
                    if (searchRow[j] !== 1) {
                        continue;
                    }
                    reachable.push(j);
                }
                reachableMap.set(cur, reachable);
            }
            const searchList = reachableMap.get(cur)!;


            const pathIndices = pathIndexTable[cur];
            for (let j = 0; j < searchList.length; j++) {
                // j already visited and new path would be longer
                const target = searchList[j];
                if (pathIndexTable[target].length !== 0 && pathIndexTable[target][0].length < pathIndices[0].length + 1) {
                    continue;
                }

                // appendable
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

        if (pathIndexTable[endIndex].length > 0 ) {
            break;
        }
    }

    /*
        * [["aaaaa","aaaaz","aaawz","aavwz","avvwz","vvvwz","vvvww","wvvww","wwvww","wwwww","ywwww","yywww","yyyww","yyyyw","yyyyy","xyyyy","xxyyy","xxxyy","xxxxy","xxxxx","gxxxx","ggxxx","gggxx","ggggx","ggggg"]]
        * */



    // pathIndexTable[endIndex].sort((a: number[], b: number[]) => {
    //     for (let i = 0; i < a.length; i++) {
    //         if (a[i] == b[i]) {
    //             continue;
    //         }
    //         return a[i] - b[i];
    //     }
    //
    //     return 0;
    // })

    for (let i = 0; i < pathIndexTable[endIndex].length; i++) {
        paths.push(pathIndexTable[endIndex][i].map(x => wordList[x]));
    }
    // console.log("count", pathIndexTable[endIndex].length)



    // let shortestLength = wordList.length;
    // const path: string[] = [];
    // const findLaddersHelper = function(wordIndex: number) {
    //     // console.log("current: " + wordList[wordIndex]);
    //
    //     path.push(wordList[wordIndex]);
    //     if (path.length > shortestLength) {
    //         path.pop();
    //         return;
    //     }
    //
    //     if (wordIndex === endIndex) {
    //         if(path.length < shortestLength) {
    //             shortestLength = path.length;
    //             paths.splice(0, paths.length);
    //         }
    //         // clone?
    //         paths.push(path.slice());
    //         path.pop();
    //         return;
    //     }
    //
    //     const searchRow = stepCountTable[wordIndex];
    //
    //     // const reachable: number[] = [];
    //     for (let i = 0; i < searchRow.length; i++) {
    //         if (i === wordIndex) {
    //             continue;
    //         }
    //         if (searchRow[i] < 0) {
    //             searchRow[i] = getDiffCount(wordList[wordIndex], wordList[i]);
    //             stepCountTable[i][wordIndex] = searchRow[i];
    //         }
    //         if (searchRow[i] === 1 && !path.includes(wordList[i])) {
    //             // reachable.push(i);
    //
    //
    //             findLaddersHelper(i);
    //         }
    //     }
    //
    //     path.pop();
    // }
    // findLaddersHelper(0);


    return paths;
};

function getDiffCount(a: string, b: string): number {
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            count++;
        }
    }
    return count;
}
