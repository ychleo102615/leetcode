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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    let pi = 0;
    let ii = 0;
    let visited: Map<number, boolean> = new Map();

    function build(): TreeNode | null {
        if (pi == preorder.length) {
            return null;
        }
        // ("build ", preorder[pi]);
        let cur = new TreeNode(preorder[pi]);
        visited.set(cur.val, true);

        // ("find left");
        if (preorder[pi] !== inorder[ii]) {
            // left is not null
            pi++;
            cur.left = build();
        }

        // if (preorder[pi] !== inorder[ii]) {
        //     console.error("not expected");
        // }

        // ("find right")
        ii++;
        if (!visited.has(inorder[ii])) {
            // right is not null
            pi++;
            cur.right = build();
        }

        return cur;
    }
    return build();
};
