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

function levelOrder(root: TreeNode | null): number[][] {
    let result: number[][] = [];

    if (root == null) {
        return result;
    }
    let refs: TreeNode[] = [root];

    let index = 0;
    // let size = refs.length - index;
    let size = 1;

    while (size > 0) {
        result.push([]);
        for (let i = index; i < index + size; i++) {

            const current = refs[i];
            result[result.length - 1].push(current.val);

            if (current.left != null) {
                refs.push(current.left);
            }
            if (current.right != null) {
                refs.push(current.right);
            }

        }
        index += size;
        size = refs.length - index;
    }

    return result;
};
