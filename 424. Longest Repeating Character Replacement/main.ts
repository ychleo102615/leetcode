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
    console.log(alphabetTrack);

    let maxLen = 0;

    alphabetTrack.forEach((track, alphabet) => {
        console.log("alphabet", alphabet)
        for (let start = 1; start < track.length; start += 2) {
            // let len = 0;
            let len = track[start];
            let coda = k;
            let end = start;

            while (coda > 0 && end < track.length) {
                // len += track[end];
                if (coda >= track[end+1]) {
                    coda -= track[end+1];
                    // len += track[end+1];
                    len += track[end+1] + (track[end+2] | 0);
                    end += 2;
                } else {
                    len += coda;
                    coda = 0;
                    break;
                }
                console.log("len, end", len, end)
            }
            if (coda > 0) {
                len += Math.min(track[start-1], coda);
                // len += Math.min(track[start-1] + track[track.length-1], coda);
            }
            if (len > maxLen) {
                maxLen = len;
            }
            if (end > track.length) {
                break;
            }
        }
    });

    return maxLen;
};
