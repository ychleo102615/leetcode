function findLadders(beginWord: string, endWord: string, wordList: string[]): string[][] {
    if (wordList.includes(beginWord)) {
        wordList.splice(wordList.indexOf(beginWord), 1);
    }

    const endIndex = wordList.indexOf(endWord);
    if (endIndex === -1) {
        return [];
    }

    const bfsList: string[] = [beginWord]; // index of begin word
    let bfsLength = 1;

    const parentMap: Map<string, string[]> = new Map();

    const leftWordMap: Map<string, number> = new Map();
    for (let i = 0; i < wordList.length; i++) {
        leftWordMap.set(wordList[i], i);
    }

    const ALPHA_COUNT = 26;
    const LADDER_RANGE = beginWord.length * ALPHA_COUNT;
    const codeA = ("a").charCodeAt(0);

    // let depth = 0;
    while (bfsLength > 0) {
        // console.log("depth", depth++)
        for (let i = 0; i < bfsLength; i++) {
            const curWord = bfsList[i];
            let col: number
            let searchWord: string
            for (let j = 0; j < LADDER_RANGE; j++) {
                col = Math.floor(j / ALPHA_COUNT);
                searchWord = curWord.slice(0, col) + String.fromCharCode(codeA + j % ALPHA_COUNT) + curWord.slice(col+1);
                if (!leftWordMap.has(searchWord)) {
                    continue;
                }
                if (!bfsList.includes(searchWord)) {
                    bfsList.push(searchWord);
                }
                if (!parentMap.has(searchWord)) {
                    parentMap.set(searchWord, [curWord]);
                } else {
                    parentMap.get(searchWord)!.push(curWord);
                }
            }
        }
        bfsList.splice(0, bfsLength);
        bfsLength = bfsList.length;
        for (let i = 0; i < bfsList.length; i++) {
            leftWordMap.delete(bfsList[i]);
        }

        if (parentMap.has(endWord)) {
            break;
        }
    }

    if (!parentMap.has(endWord)) {
        return [];
    }
    /*
        * [["aaaaa","aaaaz","aaawz","aavwz","avvwz","vvvwz","vvvww","wvvww","wwvww","wwwww","ywwww","yywww","yyyww","yyyyw","yyyyy","xyyyy","xxyyy","xxxyy","xxxxy","xxxxx","gxxxx","ggxxx","gggxx","ggggx","ggggg"]]
        * */

    const paths: string[][] = [];
    const trackParent = function(tracks: string[]) {
        const parents = parentMap.get(tracks[0]);
        if (parents === undefined) {
            paths.push(tracks);
            return;
        }
        for (let i = 0; i < parents.length; i++) {
            trackParent([parents[i]].concat(tracks))
        }
    }
    trackParent([endWord]);
    return paths;
};
