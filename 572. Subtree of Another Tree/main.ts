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

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (root == null || subRoot == null) {
        return root == subRoot;
    }

    function helper(root: TreeNode | null, subRoot: TreeNode): boolean {
        if (root == null) return false;

        if (root.val == subRoot.val) {
            if (isTreeSame(root, subRoot)) {
                return true;
            }
        }
        return helper(root.left, subRoot) || helper(root.right, subRoot);

    }
    return helper(root, subRoot);
};

function isTreeSame(tree1: TreeNode | null, tree2: TreeNode | null): boolean {
    if (tree1 == null || tree2 == null) {
        return tree1 == tree2;
    }
    if (tree1.val != tree2.val) {
        return false;
    }
    return isTreeSame(tree1.left, tree2.left) && isTreeSame(tree1.right, tree2.right);

}
