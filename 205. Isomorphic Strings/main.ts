function isIsomorphic(s: string, t: string): boolean {
    const isoMap = new Map<string, string>();
    const appeared = new Map<string, boolean>();

    for (let i = 0; i < s.length; i++) {
        if (isoMap.has(s[i])) {
            if (isoMap.get(s[i]) != t[i]) {
                return false;
            }
        } else if (appeared.has(t[i])) {
            return false;
        }
        else {
            isoMap.set(s[i], t[i]);
            appeared.set(t[i], true);
        }
    }

    return true;
};
