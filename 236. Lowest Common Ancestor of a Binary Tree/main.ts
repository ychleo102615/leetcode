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


function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    if (root == null) {
        return null;
    }
    // console.log("node:", root.val)

    const left = lowestCommonAncestor(root.left, p, q);
    // console.log("left of ",root.val, left?.val)
    const right = lowestCommonAncestor(root.right, p, q);
    // console.log("right of",root.val, right?.val)

    if (root == p) {
        // console.log("root is p", root.val, p.val)
        // find q in children
        if (left != null || right != null) {
            return root;
        }

        // if q doesn't exists
        return p;
    } else if (root == q) {
        // console.log("root is q", root.val, q.val)
        // find p in children
        if (left != null || right != null) {
            return root;
        }

        // if p doesn't exists
        return q;
    }

    // console.log("root not p q")
    // most of the condition
    if (left != null && right != null) {
        return root;
    } else if (left != null) {
        return left;
    } else {
        // right might be null, but it's ok
        return right;
    }
};
