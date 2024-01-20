function isInterleave(s1: string, s2: string, s3: string): boolean {
    console.log("\n----------- interleave -----------")
    if (s1.length + s2.length != s3.length) {
        return false;
    }
    console.log("pass count check");

    let dstMap = new Map<string, number>();
    let srcMap = new Map<string, number>();
    addMap(s3, dstMap);
    addMap(s1, srcMap);
    addMap(s2, srcMap);

    console.log(dstMap)
    console.log(srcMap)
    for (let [key, value] of dstMap) {
        if (srcMap.get(key) != value) {
            return false;
        }
    }
    console.log("pass map check");

    if (
        (s1[0] != s3[0] && s2[0] != s3[0]) ||
        (s1[s1.length-1] != s3[s3.length-1] && s2[s2.length-1] != s3[s3.length-1])
    ) {
        return false;
    }
    console.log("pass head tail check")

    let i1 = 0;
    let i2 = 0;
    let i3 = 0;

    let strcmp2 = (a: string, b: string) => {
        let index = 0;
        while (a[index] == b[index] && index < a.length) {
            index++;
        }
        return index;
    }
    let recursive = () => {
        console.log("Into Recursive:");
        if (i1 == s1.length) {
            return s2.substring(i2) === s3.substring(i3);
        }
        if (i2 == s2.length) {
            return s1.substring(i1) === s3.substring(i3);
        }
        let ss1 = s1.substring(i1);
        let ss2 = s2.substring(i2);
        let ss3 = s3.substring(i3);
        let consistentCount = strcmp2(ss1, ss2);
        console.log("substrings:", ss1, ss2, ss3, consistentCount);

        let firstDiff = strcmp2(ss1, ss3);
        if (firstDiff > 0) {
            i1 += firstDiff;
            i3 += firstDiff;
            if (recursive()) {
                return true;
            }
            i1 -= firstDiff;
            i3 -= firstDiff;
            // for (let i = 0; i < firstDiff; i++) {
            //     i1++;
            //     i3++;
            //     if (recursive()) {
            //         return true;
            //     }
            // }
            // i1 -= firstDiff;
            // i3 -= firstDiff;
        }

        if (firstDiff > 0 && consistentCount > 0 && firstDiff < ss2.length) {
            console.log("Exchange for", firstDiff)
            i2 += firstDiff;
            i3 += firstDiff;
            if (recursive()) {
                return true;
            }
            i2 -= firstDiff;
            i3 -= firstDiff;
            // for (let i = 0; i < firstDiff; i++) {
            //     i2++;
            //     i3++;
            //     if (recursive()) {
            //         return true;
            //     }
            // }
            // i2 -= firstDiff;
            // i3 -= firstDiff;
        } else {
            let secondDiff = strcmp2(ss2, ss3);
            if (secondDiff > 0) {
                // i2 += secondDiff;
                // i3 += secondDiff;
                // if (recursive()) {
                //     return true;
                // }
                // i2 -= secondDiff;
                // i3 -= secondDiff;
                for (let i = 0; i < secondDiff; i++) {
                    i2++;
                    i3++;
                    if (recursive()) {
                        return true;
                    }
                }
                i2 -= secondDiff;
                i3 -= secondDiff;

            }
        }

        return false;
    }

    let result = recursive();
    console.log("Result:", result);
    return result;
};

function addMap(theString: string, theMap: Map<string, number>) {
    for (let i = 0; i < theString.length; i++) {
        const char = theString[i];
        if (theMap.get(char) !== undefined) {
            theMap.set(char, theMap.get(char) + 1);
        } else {
            theMap.set(char, 1);
        }
    }
}

