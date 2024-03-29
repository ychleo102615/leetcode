function isPalindrome(s: string): boolean {
    s = s.toLowerCase();
    s = s.replace(/[^a-z0-9]/g, "");
    const half = Math.floor(s.length / 2);
    for (let i = 0; i < half; i++) {
        if (s[i] !== s[s.length-i-1]) {
            return false
        }
    }
    return true;
};
