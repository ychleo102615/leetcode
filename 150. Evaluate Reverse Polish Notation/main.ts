function evalRPN(tokens: string[]): number {

    let index = 0;
    const stack: number[] = [];
    while (index < tokens.length) {
        switch(tokens[index]) {
            case '+':
                stack[stack.length-2] = Math.trunc(stack[stack.length-2] + stack.pop()!);
                break;
            case '-':
                stack[stack.length-2] = Math.trunc(stack[stack.length-2] - stack.pop()!);
                break;
            case '*':
                stack[stack.length-2] = Math.trunc(stack[stack.length-2] * stack.pop()!);
                break;
            case '/':
                stack[stack.length-2] = Math.trunc(stack[stack.length-2] / stack.pop()!);
                break;
            default:
                stack.push(parseInt(tokens[index]));
        }
        console.log("index", index)
        console.log(stack)
        index++;
    }


    return stack[0];
};
