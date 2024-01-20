function isInterleave(s1: string, s2: string, s3: string): boolean {
    console.log("\n----------- interleave -----------")
    if (s1.length + s2.length != s3.length) {
        return false;
    }

    let dstMap = new Map<string, number>();
    let srcMap = new Map<string, number>();
    addMap(s3, dstMap);
    addMap(s1, srcMap);
    addMap(s2, srcMap);

    for (let [key, value] of dstMap) {
        if (srcMap.get(key) != value) {
            return false;
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

    let strcmp = (a: string, b: string) => {
        let index = 0;
        while (a[index] == b[index] && index < a.length) {
            index++;
        }
        return index;
    }
    let recursive = () => {
        if (i1 == s1.length) {
            return s2.substring(i2) === s3.substring(i3);
        }
        if (i2 == s2.length) {
            return s1.substring(i1) === s3.substring(i3);
        }
        let ss1 = s1.substring(i1);
        let ss2 = s2.substring(i2);
        let ss3 = s3.substring(i3);
        // let consistentCount = strcmp(ss1, ss2);

        let firstDiff = strcmp(ss1, ss3);
        let secondDiff = strcmp(ss2, ss3);

        let takeS1 = (a = 1)=> {
            console.log("s1: ", ss1.substring(0, a));
            i1 += a;
            i3 += a;
            let result = recursive();
            i1 -= a;
            i3 -= a;
            return result;
        }
        let takeS2 = (a = 1) => {
            console.log("s2: ", ss2.substring(0, a));
            i2 += a;
            i3 += a;
            let result = recursive();
            i2 -= a;
            i3 -= a;
            return result;
        }

        if (firstDiff == 0 && secondDiff == 0) {
            // console.log("Dead")
            return false;
        } else if (firstDiff == 0) {
            if (takeS2()){
                return true;
            }
        } else if (secondDiff == 0) {
            if (takeS1()){
                return true;
            }
        } else {
            if (firstDiff > secondDiff) {
                if (takeS1())
                    return true;
                if (takeS2())
                    return true;
            } else {
                if (takeS2())
                    return true;
                if (takeS1())
                    return true;
            }
        }

        console.log("Revert")
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
