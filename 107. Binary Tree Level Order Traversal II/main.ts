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


function levelOrderBottom(root: TreeNode | null): number[][] {
    const levelOrder: number[][] = [];
    if (root === null) {
        return levelOrder;
    }

    let queue: TreeNode[] = [root];
    let size = 1;

    while (size > 0) {
        levelOrder.splice(0, 0, []);
        for (let i = 0; i < size; i++) {
            levelOrder[0].push(queue[i].val);
            if (queue[i].left !== null) {
                queue.push(queue[i].left);
            }
            if (queue[i].right !== null) {
                queue.push(queue[i].right);
            }
        }
        queue.splice(0, size);
        size = queue.length;
    }

    return levelOrder;
};
