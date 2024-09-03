
function tempreorganizeString(s: string): string {
    const posStack: number[] = [];
    const strArray = Array.from(s);

    for (let i = 0; i < strArray.length; i++) {
        if (posStack.length > 0) {
            const lastPos = posStack[posStack.length - 1];

            // should be same as strArray
            if (s[i] != s[lastPos]) {
                posStack.pop();
                strArray.splice(lastPos, 0, s[i]);
                strArray.splice(i + 1, 1);
            } else {
                posStack.push(i);
            }
        } else {
            if (s[i] == s[i - 1]) {
                posStack.push(i);
            }
        }
    }

    if (posStack.length > 0) {
        return "";
    }
    return strArray.join("");
};
