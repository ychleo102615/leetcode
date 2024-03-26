class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


function maxPathSum(root: TreeNode | null): number {
    // historyMax = Number.MIN_VALUE;
    historyMax = -1001;  // value range from -1000 ~ 1000
    return Math.max(maxPathSumHelper(root), historyMax);
};
let historyMax = 0;

function maxPathSumHelper(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }

    const leftMax = maxPathSumHelper(root.left);
    const rightMax = maxPathSumHelper(root.right);

    // check when bend at the root

    let sum = root.val + leftMax + rightMax

    if (sum > historyMax) {
        historyMax = sum
    }

    // check take one sub tree or take none

    sum -= (leftMax > rightMax) ? rightMax : leftMax;
    if (sum < root.val) {
        sum = root.val;
    }

    if (sum > historyMax) {
        historyMax = sum
    }

    return sum;

}
