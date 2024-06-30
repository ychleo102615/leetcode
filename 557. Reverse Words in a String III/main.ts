function reverseWords(s: string): string {
    let splits = s.split(" ");
    splits = splits.reverse();
    return splits.join(" ").split("").reverse().join("");

    // 以下是我以為會比較省空間的版本，但在leetcode跑起來，只省一點點
    // let p = 0;
    // let wordLen = 0;
    // let word = "";
    // while (p + wordLen < s.length) {
    //     if (s[p + wordLen] == " ") {
    //         // do reverse
    //         for (let i = p + wordLen - 1; i >= p; i--) {
    //             word += s[i];
    //         }
    //         word += " ";
    //         p += wordLen + 1;
    //         wordLen = 0;
    //     } else {
    //         wordLen++;
    //     }
    // }
    // for (let i = p + wordLen - 1; i >= p; i--) {
    //     word += s[i];
    // }
    // return word;
};
