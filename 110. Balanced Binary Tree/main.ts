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


function isBalanced(root: TreeNode | null): boolean {
    return getBalancedSubTreeHeight(root) >= 0;
};

function getBalancedSubTreeHeight(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }
    const left = getBalancedSubTreeHeight(root.left);
    const right = getBalancedSubTreeHeight(root.right);
    if (left < 0 || right < 0) {
        return -1;
    }

    // console.log("compare:", root.val, left, right);
    if (Math.abs(left - right) <= 1) {
        return (left > right ? left : right) + 1;
    } else {
        return -1;
    }
}
