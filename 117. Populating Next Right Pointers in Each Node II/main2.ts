class _Node {
    val: number
    left: _Node | null
    right: _Node | null
    next: _Node | null

    constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
        this.next = (next===undefined ? null : next)
    }
}



function connect(root: _Node | null): _Node | null {
    if (root == null) {
        return null;
    }

    function connectHelper(node: _Node | null, parentGen: _Node | null) {
        if (node == null) {
            return;
        }
        // connect next
        while (parentGen != null) {
            if (parentGen.left != node && parentGen.left != null) {
                node.next = parentGen.left;
                break;
            } else if (parentGen.right != null) {
                node.next = parentGen.right;
                break;
            } else {
                parentGen = parentGen.next;
            }
        }
        connectHelper(node.right, node.next);
        connectHelper(node.left, node);
    }

    connectHelper(root, null);

    return root;
};
