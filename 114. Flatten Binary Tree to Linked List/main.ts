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


/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
    flattenHelper(root);
};

function flattenHelper(root: TreeNode | null): TreeNode | null {
    if (root === null) {
        return null;
    }

    let rightTail = flattenHelper(root.right);
    let leftTail = flattenHelper(root.left);

    if (leftTail !== null) {
        // move left to right
        let temp = root.right;
        root.right = root.left;
        root.left = null;
        leftTail.right = temp;
    }

    return rightTail || leftTail || root;
}
