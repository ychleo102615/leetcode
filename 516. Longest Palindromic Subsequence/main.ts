function longestPalindromeSubseq(s: string): number {
    const len = s.length;

    /* // dp[i][j]代表字串s[i..j]之間的最長回文長度
    const dp = Array.from(Array(len), () => new Array(len).fill(0));
    for (let i = 0; i < len; i++) {
        dp[i][i] = 1;
    }

    for (let i = len - 2; i >= 0; i--) {
        for (let j = i + 1; j < len; j++) {
            if (s[i] == s[j]) {
                dp[i][j] = dp[i + 1][j - 1] + 2;
            } else {
                dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1]);
            }
        }
    }

    return dp[0][len-1]; */

    const dp = new Array(len).fill(1);
    let prev = 1;

    for (let i = len - 2; i >= 0; i--) {
        prev = 1;
        for (let j = i + 1; j < len; j++) {
            let maxLenAtThePoint = 0;
            if (s[i] == s[j]) {
                // dp[i][j] = dp[i + 1][j - 1] + 2;
                if (i + 1 > j - 1) {
                    maxLenAtThePoint = 2;
                } else {
                    //                 仍然是i+1層的資料
                    maxLenAtThePoint = dp[j-1] + 2;
                }
            } else {
                // dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1]);
                maxLenAtThePoint = Math.max(dp[j], prev);
            }
            // 更新i層位於 j - 1 的資料，取代i+1層
            dp[j-1] = prev;
            prev = maxLenAtThePoint;
        }
        dp[len-1] = prev;
    }


    return dp[len-1];
};
