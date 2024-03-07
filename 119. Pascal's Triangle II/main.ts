const factorial: number[] = [1];
function getFactorial(rank: number): number {
    if (factorial[rank-1] === undefined) {
        factorial.push(getFactorial(rank - 1) * rank);
    }
    return factorial[rank - 1];
}

function calCombs(rank: number): number[] {
    const row: number[] = [1];
    if (rank == 0) {
        return row;
    }
    let num = rank;
    for (let i = 1; i <= Math.floor(rank / 2); i++) {
        row.push(num / getFactorial(i));
        num *= (rank - i);
    }
    return row.concat(row.slice(0, Math.ceil(rank / 2)).reverse());
}

function getRow(rowIndex: number): number[] {
    return calCombs(rowIndex);
};
