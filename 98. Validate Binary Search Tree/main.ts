/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
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

function isValidBST(root: TreeNode | null): boolean {
    if (!root) return true;

    let current: TreeNode;
    if (root.left) {
        if (isValidBST(root.left) === false) {
            return false;
        }
        current = root.left;
        while(current.right) {
            current = current.right;
        }
        if (current.val >= root.val) {
            return false;
        }
    }
    if (root.right !== null) {
        if (isValidBST(root.right) === false) {
            return false;
        }
        current = root.right;
        while(current.left) {
            current = current.left;
        }
        if (current.val <= root.val) {
            return false;
        }
    }

    return true;
};
