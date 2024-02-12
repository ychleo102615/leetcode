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


function buildTree(inorder: number[], postorder: number[]): TreeNode | null {

    let ii = inorder.length - 1;
    let pi = postorder.length - 1;
    let visited = new Map<number, true>();

    function build(): TreeNode | null {
        if (pi < 0) {
            return null;
        }

        let cur = new TreeNode(postorder[pi]);

        // find right
        if (inorder[ii] !== postorder[pi]) {
            // right is not null
            pi--;
            visited.set(cur.val, true);
            cur.right = build();
        }

        // inorder[ii] === postorder[pi]
        // find left
        ii--;
        if (!visited.has(inorder[ii])) {
            pi--;
            visited.set(cur.val, true);
            cur.left = build();
        }


        return cur;
    }
    return build();
};
