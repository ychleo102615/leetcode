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


function zigzagLevelOrder(root: TreeNode | null): number[][] {
    let result: number[][] = [];
    if (root === null) {
        return result;
    }
    let refs: TreeNode[] = [root];
    let size = refs.length;

    while (size > 0) {
        result.push([]);
        for (let i = 0; i < size; i++) {
            result[result.length - 1].push(refs[i].val);
            if (refs[i].left != null) {
                refs.push(refs[i].left);
            }
            if (refs[i].right != null) {
                refs.push(refs[i].right);
            }
        }
        refs.splice(0, size);
        size = refs.length;

        if (result.length % 2 == 0) {
            result[result.length - 1].reverse();
        }
    }


    return result;
};
