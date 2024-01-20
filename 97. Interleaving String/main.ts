function isInterleave(s1: string, s2: string, s3: string): boolean {
    if (s1.length + s2.length != s3.length) {
        return false;
    }

    let dstMap = new Map<string, number>();
    let srcMap = new Map<string, number>();
    addMap(s3, dstMap);
    addMap(s1, srcMap);
    addMap(s2, srcMap);

    console.log(dstMap)
    console.log(srcMap)
    console.log("start", dstMap.get("a"));
    for (let [key, value] of dstMap) {
        if (srcMap.get(key) != value) {
            return false;
        } else {
            console.log("check:" + srcMap.get(key))
        }
    }

    if (
        (s1[0] != s3[0] && s2[0] != s3[0]) ||
        (s1[s1.length-1] != s3[s3.length-1] && s2[s2.length-1] != s3[s3.length-1])
    ) {
        return false;
    }

    let i1 = 0;
    let i2 = 0;
    let i3 = 0;
    let consistentCount = 0;
    let consParseCount = 0

    let strcmp = () => {
        let count = 0;
        while(s1[i1+count] === s2[i2+count] && i1 + count < s1.length) {
            count++;
        }
        return count
    }
    let recursive = () => {
        if (i1 == s1.length && i2 == s2.length && i3 == s3.length) {
            return true;
        }
        if (consistentCount == 0) {
            consistentCount = strcmp()
        } else {
            consParseCount++;
            if (consParseCount > consistentCount) {
                consistentCount = 0;
                consParseCount = 0
                console.log("reset front", i1, i2)
            }
        }

        if (s1[i1] == s3[i3]) {
            //console.log("enter s1: " + s1[i1]);
            i1++;
            i3++;
            if (recursive()) {
                return true;
            }
            i1--;
            i3--;
            //console.log("leave s1: " + s1[i1]);
        }
        if (s2[i2] == s3[i3]) {
            //console.log("enter s2: " + s2[i2]);
            i2++;
            i3++;
            if (recursive()) {
                return true;
            }
            i2--;
            i3--;
            //console.log("leave s2: " + s2[i2]);
        }
        //console.log(i1, i2, i3);

        if (consistentCount > 0) {
            i1 -= consistentCount;
            i2 += consistentCount;
            //console.log("reset rear", i1, i2, consistentCount)
            consistentCount = 0;
            consParseCount = 0;
            if (recursive()) {
                return true;
            }
        }
        return false;
    }

    return recursive();
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

