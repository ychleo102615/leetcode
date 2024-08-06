function countCharacters(words: string[], chars: string): number {
    let totalLength = 0;
    const charMap = new Map<string, number>();

    for (let i = 0; i < chars.length; i++) {
        if (charMap.has(chars[i])) {
            charMap.set(chars[i], charMap.get(chars[i])! + 1);
        } else {
            charMap.set(chars[i], 1);
        }
    }

    for (let i = 0; i < words.length; i++) {
        const useMap = new Map(charMap);
        let j = 0;
        for (j = 0; j < words[i].length; j++) {
            const char = words[i][j];
            if (useMap.has(char)) {
                if (useMap.get(char)! > 0) {
                    useMap.set(char, useMap.get(char)! - 1);
                } else {
                    break;
                }
            } else {
                break;
            }
        }
        if (j == words[i].length) {
            totalLength += words[i].length;
        }
    }


    return totalLength;
};
