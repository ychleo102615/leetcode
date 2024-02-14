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


function sortedArrayToBST(nums: number[]): TreeNode | null {
    function buildTree(subnums: number[]): TreeNode | null {
        if (subnums.length == 0) {
            return null;
        }
        const mid = Math.floor(subnums.length / 2);
        return new TreeNode(subnums[mid], buildTree(subnums.slice(0, mid)), buildTree(subnums.slice(mid+1)));
    }

    return buildTree(nums);
};
