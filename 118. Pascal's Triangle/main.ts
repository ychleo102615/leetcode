const pascal: number[][] = [
    [1],
    [1,1],
];

function generate(numRows: number): number[][] {
    let lastRow = pascal[pascal.length - 1];
    while(numRows > pascal.length) {
        const newRow: number[] = [1];
        for (let i = 1; i < pascal[pascal.length - 1].length; i++) {
            newRow.push(lastRow[i-1] + lastRow[i]);
        }
        newRow.push(1);
        pascal.push(newRow);
        lastRow = newRow;
    }
    return pascal.slice(0, numRows);
};
