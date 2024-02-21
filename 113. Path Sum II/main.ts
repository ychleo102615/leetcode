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


function pathSum(root: TreeNode | null, targetSum: number): number[][] {
    let ans: number[][] = [];
    if (root === null) {
        return ans;
    }

    let track: number[] = [];

    function findSum(current: TreeNode | null, leftValue: number) {
        if (current === null) {
            return;
        }
        track.push(current.val);
        leftValue -= current.val;

        if (current.left === null && current.right === null) {
            // leaf
            if (leftValue === 0) {
                ans.push(track.slice());
            }
        } else {
            findSum(current.left, leftValue);
            findSum(current.right, leftValue);
        }
        track.splice(track.length - 1, 1);
    }

    findSum(root, targetSum);

    return ans;
};
