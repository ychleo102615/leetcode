function generateParenthesis(n: number): string[] {
    const result: string[] = [];

    let generate = function(quota: number, left: string, right: string) {
        if (quota == 0) {
            result.push(left + right);
            return;
        }

        quota--;
        // generate at any possible right parenthesis's right side, even when no right parenthesis
        for (let i = 0; i < right.length + 1; i++) {
            generate(quota, left + right.slice(0, i) + "(" , ")" + right.slice(i))
        }
    }

    generate(n, "", "");


    return result;
};
