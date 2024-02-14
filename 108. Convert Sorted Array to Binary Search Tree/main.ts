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
    function buildTree(start: number, end: number): TreeNode | null {
        if (start == end) {
            return null;
        }
        const mid = start + Math.floor((end - start) / 2);
        return new TreeNode(nums[mid], buildTree(start, mid), buildTree(mid + 1, end));
    }

    return buildTree(0, nums.length);
};
