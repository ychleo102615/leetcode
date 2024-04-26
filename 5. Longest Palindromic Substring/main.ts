function longestPalindrome(s: string): string {
    let simplifiedString = "";
    const simplifiedStringCount: number[] = [];


    let index = 0;
    while (index < s.length) {
        let sameCount = 0;

        while (true) {
            if (index + sameCount + 1 >= s.length) {
                break;
            } else if (s[index + sameCount + 1] !== s[index]) {
                break;
            }
            sameCount++;
        }

        simplifiedString += s[index];
        simplifiedStringCount.push(1 + sameCount);

        index += sameCount + 1;
    }

    // console.log(simplifiedString)
    // console.log(simplifiedStringCount)

    let longest = "";
    for (let i = 0; i < simplifiedString.length; i++) {

        // symmetric count
        let sc = 0;
        let balance = 0;

        while (true) {
            if (i - sc - 1 < 0 || i + sc + 1 >= simplifiedString.length) {
                break;
            } else if (simplifiedString[i - sc - 1] !== simplifiedString[i + sc + 1]) {
                break;
            }
            sc++;
            balance = simplifiedStringCount[i - sc] - simplifiedStringCount[i + sc];
            if (balance !== 0) {
                break;
            }
        }
        let combinedStr = "";
        for (let j = i - sc; j <= i + sc; j++) {
            combinedStr += simplifiedString[j].repeat(simplifiedStringCount[j]);
        }
        if (balance < 0) {
            // rear is longer
            combinedStr = combinedStr.slice(0, combinedStr.length + balance);
        } else if (balance > 0) {
            // front is longer
            combinedStr = combinedStr.slice(balance, combinedStr.length);
        }

        if (combinedStr.length > longest.length) {
            longest = combinedStr;
            // console.log("update longest", longest)
        }
    }



    return longest;
};
