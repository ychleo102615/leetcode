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

    if (root.left) {
        if (isValidBST(root.left) === false) {
            // console.log( root.val.toString() + "is wrong");
            return false;
        }
        if (getBiggestValue(root.left) >= root.val) {
            // console.log( root.val.toString() + "is wrong");
            return false;
        }
    }
    if (root.right !== null) {
        if (isValidBST(root.right) === false) {
            // console.log( root.val.toString() + "is wrong");
            return false;
        }
        if (getSmallestValue(root.right) <= root.val) {
            // console.log( root.val.toString() + "is wrong");
            return false;
        }
    }

    return true;;
};

function getBiggestValue(root: TreeNode): number{
    let current = root;
    while (current.right) {
        current = current.right;
    }
    return current.val;
}

function getSmallestValue(root: TreeNode): number{
    let current = root;
    while (current.left) {
        current = current.left;
    }
    return current.val;
}

