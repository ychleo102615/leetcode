class _Node {
    val: number
    children: _Node[]

    constructor(val?: number, children?: _Node[]) {
        this.val = (val===undefined ? 0 : val)
        this.children = (children===undefined ? [] : children)
    }
}

function preorder(root: _Node | null): number[] {
    const order: number[] = [];
    if (root == null) {
        return order;
    }
    const queue = [root];

    while (queue.length > 0) {
        const node = queue.splice(0, 1)[0];
        queue.splice(0, 0, ...node.children);
        order.push(node.val);
    }

    return order;
};
