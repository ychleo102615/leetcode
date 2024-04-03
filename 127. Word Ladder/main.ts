function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
    if (wordList.includes(beginWord)) {
        wordList.splice(wordList.indexOf(beginWord), 1);
    }

    const endIndex = wordList.indexOf(endWord);
    if (endIndex === -1) {
        return 0;
    }

    const bfsList: string[] = [beginWord]; // index of begin word
    let bfsLength = 1;

    const leftWordMap: Map<string, number> = new Map();
    for (let i = 0; i < wordList.length; i++) {
        leftWordMap.set(wordList[i], i);
    }

    const ALPHA_COUNT = 26;
    const LADDER_RANGE = beginWord.length * ALPHA_COUNT;
    const codeA = ("a").charCodeAt(0);

    let depth = 0;
    let found = false;
    while (bfsLength > 0) {
        depth++;
        for (let i = 0; i < bfsLength; i++) {
            const curWord = bfsList[i];

            if (leftWordMap.size < LADDER_RANGE) {
                for (let searchWord of leftWordMap.keys()) {
                    if (isReachable(curWord, searchWord)) {
                        if (searchWord === endWord) {
                            found = true;
                            break;
                        }
                        if (!bfsList.includes(searchWord)) {
                            bfsList.push(searchWord);
                        }
                        leftWordMap.delete(searchWord);
                    }
                }
            } else {
                let col: number
                let searchWord: string
                for (let j = 0; j < LADDER_RANGE; j++) {
                    col = Math.floor(j / ALPHA_COUNT);
                    searchWord = curWord.slice(0, col) + String.fromCharCode(codeA + j % ALPHA_COUNT) + curWord.slice(col+1);
                    if (!leftWordMap.has(searchWord)) {
                        continue;
                    }
                    if (searchWord === endWord) {
                        found = true;
                        break;
                    }
                    if (!bfsList.includes(searchWord)) {
                        bfsList.push(searchWord);
                    }
                    leftWordMap.delete(searchWord);
                }
            }
        }
        if (found) {
            break;
        }
        bfsList.splice(0, bfsLength);
        bfsLength = bfsList.length;
    }
    if (found) {
        return depth + 1;
    }

    return 0;
};

function isReachable(a: string, b: string) {
    let diff = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            diff++;
        }
        if (diff > 1) {
            return false;
        }
    }
    return diff === 1;
}
