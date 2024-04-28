function isValid(s: string): boolean {
    const queue: string[] = [];

    for (let i = 0; i < s.length; i++) {
        switch(s[i]) {
            case '(':
            case '{':
            case '[':
                queue.push(s[i]);
                break;
            case ')':
                if (queue.pop() !== '(') {
                    return false;
                }
                break;
            case '}':
                if (queue.pop() !== '{') {
                    return false;
                }
                   break;
            case ']':
                if (queue.pop() !== '[') {
                    return false;
                }
                   break;
            default:
                return false;
        }

    }

    return queue.length === 0;
};
