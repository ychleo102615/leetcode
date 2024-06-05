function getSum(a: number, b: number): number {
    let ans = a ^ b;

    console.log("a", a, (a >>> 0).toString(2))
    console.log("b", b, (b >>> 0).toString(2))
    console.log("XOR", ans, ans.toString(2))

    let isBitSet = function(num: number, n: number) {
        return (num & (1 << n)) != 0;
    }


    let isCarry = false;
    for (let i = 0; i < 32; i++) {

        let thisCarry = false;
        if (!isBitSet(ans, i)) {
            thisCarry = isBitSet(a, i) && isBitSet(b, i);
        }

        if (isCarry) {
            // flip ans at i'th bit
            ans ^= (1 << i);
            console.log("flip at ", i)
            if (!isBitSet(ans, i)) {
                thisCarry = true;
            }
        }

        isCarry = thisCarry;
    }


    return ans;
};
