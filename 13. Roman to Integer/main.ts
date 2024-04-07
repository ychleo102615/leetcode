const SYMBOL_MAP = new Map<string, number>([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
]);
function romanToInt(s: string): number {
    const chars = s.split('');
    let cur = SYMBOL_MAP.get(chars[0])!
    let sum = cur;
    for (let i = 1; i < chars.length; i++) {
        if (cur < SYMBOL_MAP.get(chars[i])!) {
            sum -= cur * 2;
        }
        cur = SYMBOL_MAP.get(chars[i])!
        sum += cur;
    }

    return sum;
};
