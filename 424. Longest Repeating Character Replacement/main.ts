function characterReplacement(s: string, k: number): number {
    let maxLen = 0;
    const curCharCount = new Array(26).fill(0); // 目前window內的字母數量
    const A = 'A'.charCodeAt(0);

    for (let end = 0, start = 0, maxCount = 0; end < s.length; end++) {
        let char = s.charCodeAt(end) - A;

        // 同一個window內，最多的字母數量
        maxCount = Math.max(maxCount, ++curCharCount[char]);

        // 如果window內的字母數量 + k < window長度，代表無法全部替換
        /*
            * 這個瞬間，所能獲得的最大長度為 maxCount + k
            */
        if (end - start + 1 - maxCount > k) {
            curCharCount[char]--;
            start++;
        }

        maxLen = Math.max(maxLen, end - start + 1);
    }

    return maxLen;
};
