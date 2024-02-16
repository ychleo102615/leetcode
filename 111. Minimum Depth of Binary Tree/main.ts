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


function minDepth(root: TreeNode | null): number {
    if (!root)
        return 0;

    let queue = [root];
    let size = 1;
    let depth = 1;

    while (size > 0) {
        for (let i = 0; i < size; i++) {
            if(queue[i].left !== null || queue[i].right !== null) {
                if (queue[i].left !== null)
                    queue.push(queue[i].left);
                if (queue[i].right !== null)
                    queue.push(queue[i].right);
            } else {
                return depth;
            }

        }
        queue.splice(0, size);
        size = queue.length;
        depth++;
    }
    return 0;
};
