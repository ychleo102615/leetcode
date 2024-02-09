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


function maxDepth(root: TreeNode | null): number {
    // if (root === null) {
    //     return 0;
    // }
    // let queue: TreeNode[] = [root];
    // let size = 1;
    // let i: number;
    // let layer = 0;
    // while(size > 0) {
    //     for (i = 0; i < size; i++) {
    //         if (queue[i].left != null) {
    //             queue.push(queue[i].left);
    //         }
    //         if (queue[i].right != null) {
    //             queue.push(queue[i].right);
    //         }
    //     }
    //     queue.splice(0, size);
    //     layer++;
    //     size = queue.length;
    // }
    //
    // return layer;




    // temp 2
    if (root == null) {
        return 0;
    }
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);
    return (left > right ? left : right) + 1;
};
