const token = "*";
function longestPalindrome(s: string): string {

    // morphed string
    let ms = token;

    for (let i = 0; i < s.length; i++) {
        ms += s[i] + token;
    }
    // console.log("morphed string:", ms)

    const longestCount: number[] = Array(ms.length).fill(0);

    let index = 0;
    let longestIndex = 0;
    let curentCenter = 0;
    let currentRightBound = 0;

    while (index < ms.length) {

        if (index > currentRightBound) {
            curentCenter = index;
            currentRightBound = index;
        } else {
            let mirrorIndex = curentCenter - (index - curentCenter);
            longestCount[index] = Math.min(longestCount[mirrorIndex], currentRightBound - index);
        }
        let radius = longestCount[index];
        while (index - radius - 1 >= 0 && index + radius + 1 < ms.length) {
            if (ms[index - radius - 1] === ms[index + radius + 1]) {
                radius++;
            } else {
                break;
            }
        }
        longestCount[index] = radius;
        if (radius > longestCount[longestIndex]) {
            longestIndex = index;
        }
        if (index + radius > currentRightBound) {
            curentCenter = index;
            currentRightBound = index + radius;
        }
        // console.log(ms[index], radius);
        index++;
    }

    const startIndex = (longestIndex - longestCount[longestIndex]) / 2;

    return s.slice(startIndex, startIndex + longestCount[longestIndex]);
};
