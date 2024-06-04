/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    const length = matrix.length;
    if (length <= 1) {
        return;
    }
    for (let i = 0; i < Math.floor(length / 2); i++) {

        const sum = length - (2 * i) - 1;
        for (let j = 0; j < sum; j++) {
            let temp = matrix[i][i+j];
            matrix[i][i+j] = matrix[i+sum-j][i];
            matrix[i+sum-j][i] = matrix[i+sum][i+sum-j];
            matrix[i+sum][i+sum-j] = matrix[i+j][i+sum];
            matrix[i+j][i+sum] = temp;
        }
    }
};
