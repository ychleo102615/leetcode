function isInterleave(s1: string, s2: string, s3: string): boolean {
    // console.log("\n----------- interleave -----------")
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

    // let visited: boolean[][] = new Array(s1.length+1).fill(new Array(s2.length+1).fill(false));
    let visited: boolean[][] = Array.from(Array(s1.length+1), ()=> new Array(s2.length+1).fill(false));

    let recursive = () => {
        // console.log(visited)
        if (i1 == s1.length) {
            return s2.substring(i2) === s3.substring(i3);
        }
        if (i2 == s2.length) {
            return s1.substring(i1) === s3.substring(i3);
        }
        // console.log("visit", i1, i2)
        if (visited[i1][i2]) {
            // console.log("is visited, return")
            return false;
        }
        visited[i1][i2] = true;

        if (s1[i1] == s3[i3]) {
            // console.log("s1:", s1[i1]);
            i1++;
            i3++;
            if (recursive()) {
                return true;
            }
            i1--;
            i3--;
        }
        if (s2[i2] == s3[i3]) {
            // console.log("s2:", s2[i2]);
            i2++;
            i3++;
            if (recursive()) {
                return true;
            }
            i2--;
            i3--;
        }

        // console.log("Revert")
        return false;
    }

    let result = recursive();
    // console.log("Result:", result);
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
