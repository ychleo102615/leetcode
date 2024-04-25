function longestPalindrome(s: string): string {
    let simplifiedString = "";
    const simplifiedStringCount: number[] = [];


    let index = 0;
    while (index < s.length) {
        let sameCount = 0;

        // 這裡有問題
        while (s[index] === s[index + sameCount]) {
            sameCount++;
            if (index + sameCount >= s.length) {
                sameCount--;
                break;
            }
        }

        simplifiedString += s[index];
        simplifiedStringCount.push(1 + sameCount);

        index += sameCount + 1;
    }

    console.log(simplifiedString)
    console.log(simplifiedStringCount)

    let longest = "";
    for (let i = 0; i < simplifiedString.length; i++) {

        // symmetric count
        let sc = 0;
        let balance = 0;
        while(simplifiedString[i - sc] === simplifiedString[i + sc]) {
            sc++;
            balance = simplifiedStringCount[i + sc] - simplifiedStringCount[i - sc];
            if (balance !== 0) {
                break;
            }
            if (i - sc < 0 || i + sc >= simplifiedString.length) {
                sc--;
                break;
            }
        }
        let combinedStr = "";
        for (let j = i - sc; j <= i + sc; j++) {
            combinedStr += simplifiedString[j].repeat(simplifiedStringCount[j]);
        }
        if (balance < 0) {
            // rear is longer
            combinedStr.slice(0, combinedStr.length + balance);
        } else if (balance > 0) {
            // front is longer
            combinedStr.slice(balance, combinedStr.length);
        }

        if (combinedStr.length > longest.length) {
            longest = combinedStr;
            console.log("update longest", longest)
        }
    }



    return longest;
};
