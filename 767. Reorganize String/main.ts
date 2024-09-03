function reorganizeString(s: string): string {
    const map = new Map<string, number>();
    const chars: string[] = [];
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i])! + 1);
        } else {
            map.set(s[i], 1);
            chars.push(s[i]);
        }
    }

    chars.sort((a, b) => {
        return map.get(b)! - map.get(a)!;
    });

    let otherSum = 0;
    for (let i = 1; i < chars.length; i++) {
        otherSum += map.get(chars[i])!;
    }

    if (map.get(chars[0])! - 1 > otherSum) {
        return "";
    }

    const charArray: string[] = [];

    for (let i = 0; i < chars.length; i++) {
        for (let j = 0; j < map.get(chars[i])!; j++) {
            charArray.push(chars[i]);
        }
    }
    const half = Math.ceil(charArray.length / 2);

    for (let i = 0; i < Math.floor(charArray.length / 2); i++) {
        const char = charArray.splice(half + i, 1)[0];
        charArray.splice(i*2 + 1, 0, char);
    }

    return charArray.join("");
};
