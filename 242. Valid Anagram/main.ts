function isAnagram(s: string, t: string): boolean {
    if (s.length != t.length) {
        return false;
    }

    const usage = new Map<string, number>();

    for (let i = 0; i < s.length; i++) {
        if (usage.has(s[i])) {
            usage.set(s[i], usage.get(s[i])! + 1);
        } else {
            usage.set(s[i], 1);
        }
        if (usage.has(t[i])) {
            usage.set(t[i], usage.get(t[i])! - 1);
        } else {
            usage.set(t[i], -1);
        }
    }


    for (const tuple of usage.entries()) {
        if (tuple[1] != 0) {
            return false;
        }
    }
    return true;

};
