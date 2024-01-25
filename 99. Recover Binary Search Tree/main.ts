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

/**
 Do not return anything, modify root in-place instead.
 */
function recoverTree(root: TreeNode | null): void {

    let ptr: TreeNode | null = null;
    let firstMissPlaced: TreeNode | null = null;
    let swapped = false;

    let swap = function(t1: TreeNode, t2: TreeNode) {
        console.log(t1.val, t2.val)
        let temp = t1?.val;
        t1.val = t2?.val;
        t2.val = temp;
        swapped = true;
    }

    let inorder = function(current: TreeNode | null) {
        if (current == null) {
            return;
        }
        inorder(current.left);


        if (swapped) {
            return;
        }
        if (!firstMissPlaced) {
            if (!ptr || ptr.val < current.val) {
                ptr = current;
            } else {
                firstMissPlaced = ptr;
                ptr = current;
            }
        } else {
            if (current.val > firstMissPlaced.val) {
                if (ptr) {
                    swap(firstMissPlaced, ptr);
                }
                return;
            }
            if (ptr && ptr.val > current.val) {
                swap(firstMissPlaced, current);
                return;
            }
        }

        inorder(current.right);
    }

    inorder(root);
    if (!swapped) {
        if (firstMissPlaced && ptr)
            swap(firstMissPlaced, ptr);
    }

};
