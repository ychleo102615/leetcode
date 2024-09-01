function partitionLabels(s: string): number[] {
    const charSegement = new Map<string, number[]>();

    for (let i = 0; i < s.length; i++) {
        if (charSegement.has(s[i])) {
            charSegement.get(s[i])![1] = i;
        } else {
            charSegement.set(s[i], [i, i]);
        }
    }
    // console.log("segment", charSegement);


    let left = 0;
    const sizes: number[] = [];

    while (left < s.length) {
        // console.log("left", left);
        // console.log("segment", charSegement);

        const thisChar = s[left];
        let right = charSegement.get(thisChar)![1];

        let bigRight = right;
        charSegement.forEach((segment, char) => {
            if (char == thisChar) {
                return;
            }

            if (right > segment[1]) {
                charSegement.delete(char);
            } else if (right < segment[0]) {
                // do nothing
            } else {
                charSegement.delete(char);
                if (segment[1] > bigRight) {
                    bigRight = segment[1];
                }
            }
        });

        // console.log("big right", bigRight)
        if (right == bigRight) {
            // next
            sizes.push(right + 1 - left);
            left = right + 1;
            charSegement.delete(thisChar);
        } else {
            charSegement.get(thisChar)![1] = bigRight;
        }

    }


    return sizes;
};
