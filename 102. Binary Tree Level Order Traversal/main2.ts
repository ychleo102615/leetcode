
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
    const levels: number[][] = [];

    let traverse = function(node: TreeNode| null, layer: number) {
        if (node == null) {
            return;
        }
        if (levels[layer] === undefined) {
            levels.push([]);
        }
        levels[layer].push(node.val);
        traverse(node.left, layer+1);
        traverse(node.right, layer+1);
    }
    traverse(root, 0);

    return levels;
};
