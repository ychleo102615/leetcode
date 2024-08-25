function characterReplacement(s: string, k: number): number {
    const alphabetTrack = new Map<string, number[]>();

    let cur = "";
    for (let i = 0; i < s.length; i++) {
        if (cur != s[i]) {
            if (alphabetTrack.has(cur)) {
                alphabetTrack.get(cur)!.push(0);
            }
            cur = s[i];
            if (alphabetTrack.has(cur)) {
                alphabetTrack.get(cur)!.push(0);
            } else {
                alphabetTrack.set(cur, [i, 0]);
            }
        }
        alphabetTrack.forEach((track) => {
            track[track.length-1]++;
        });
    }
    alphabetTrack.get(cur)!.push(0);
    // console.log(alphabetTrack);

    let maxLen = 0;

    alphabetTrack.forEach((track, alphabet) => {
        // console.log("alphabet", alphabet)

        let start = 1;
        let end = 1;
        let coda = k;
        let len = track[start];

        function checkLen() {
            const possibleAddOn = Math.min(track[start-1], coda);
            if (len + possibleAddOn > maxLen) {
                maxLen = len + possibleAddOn;
            }
        }

        while (end < track.length) {
            checkLen();

            if (coda >= track[end+1]) {
                coda -= track[end+1];
                len += track[end+1] + (track[end+2] | 0);
                end += 2;
            } else if (start + 2 > end) {
                start += 2;
                end += 2;
                if (end >= track.length) {
                    break;
                }
                len = track[start];
            } else {

                // if (coda > 0) {
                //     len += Math.min(track[start-1], coda);
                // }
                // if (len > maxLen) {
                //     maxLen = len;
                // }
                // if (coda > 0) {
                //     len -= Math.min(track[start-1], coda);
                // }

                coda += track[start+1];
                len -= track[start] + track[start+1];
                start += 2;
            }
        }

        checkLen();


    });

    return maxLen;
};
