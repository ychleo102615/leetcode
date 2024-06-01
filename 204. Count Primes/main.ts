function countPrimes(n: number): number {
    let count = 0;

    const checkList = new Array(n).fill(false);

    for (let i = 1; i < n - 1; i++) {
        if (!checkList[i]) {
            let multiple = i + 1;
            while (multiple < n ) {
                checkList[multiple - 1] = true;
                multiple += i + 1;
            }
            count++;
        }
    }

    return count;
};
