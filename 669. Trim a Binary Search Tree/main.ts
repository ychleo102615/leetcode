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


function trimBST(root: TreeNode | null, low: number, high: number): TreeNode | null {
    if (root == null) {
        return null;
    }
    if (root.val < low) {
        // console.log(root.val, "lower than", low)
        return trimBST(root.right, low, high);
    } else if (root.val > high) {
        // console.log(root.val, "higher than", high)
        return trimBST(root.left, low, high);
    }

    // console.log(root.val, "pass")
    root.left = trimBST(root.left, low, high);
    root.right = trimBST(root.right, low, high);


    return root;
};
