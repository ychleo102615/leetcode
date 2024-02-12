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
    let stack: TreeNode[] = [];

    function build(): TreeNode | null {
        if (pi == preorder.length) {
            return null;
        }
        // ("build ", preorder[pi]);
        let cur = new TreeNode(preorder[pi]);
        stack.push(cur);

        // ("find left");
        if (preorder[pi] !== inorder[ii]) {
            pi++;
            // ("go left");
            cur.left = build();
        } else {
            // ("left is null")
        }

        // this should happen: preorder[pi] === inorder[ii]
        if (preorder[pi] !== inorder[ii]) {
            console.error("not expected");
        }

        // ("find right")
        ii++;
        // check stack include next of inorder[ii]
        let fallbackIndex = -1;
        if (stack.length > 0) {
            // use hash or reverse for loop
            for (let i = 0; i < stack.length - 1; i++) {
                if (stack[i].val == inorder[ii]) {
                    // ("find ", inorder[ii], "at ", i);
                    fallbackIndex = i;
                    break;
                }
            }
        }
        if (fallbackIndex >= 0) {
            // 右子樹為空
            stack.splice(fallbackIndex, stack.length - fallbackIndex - 1);
            // pass parent node, which is cur
            // ("right is null")
            return cur;
        } else {
            pi++;
        }
        // ("go right");
        cur.right = build();

        return cur;
    }
    return build();
};
