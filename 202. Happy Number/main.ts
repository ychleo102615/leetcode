function isHappy(n: number): boolean {

    const passed = new Map<string, boolean>();

    // const squares: number[] = [];
    //
    // for (let i = 0; i < 10; i++) {
    //     squares.push(i*i);
    // }

    const comb: number[] = [];
    let join = "";
    while (n != 1) {
        // const comb: number[] = [];
        comb.splice(0, comb.length);
        while (n > 0) {
            comb.push(n % 10);
            n = Math.floor(n / 10);
        }
        comb.sort();
        // console.log("comb", comb)
        join = comb.join("");
        if (passed.has(join)) {
            return false;
        }
        passed.set(join, true);

        // console.log("join", comb.join());

        n = comb.reduce((sum, digit) => sum + digit*digit, 0);

        // console.log("next n:", n)
    }

    return true;
};
