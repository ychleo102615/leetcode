class Node {
    val: number
    left: Node | null
    right: Node | null
    next: Node | null
    constructor(val?: number, left?: Node, right?: Node, next?: Node) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
        this.next = (next===undefined ? null : next)
    }
}


function connect(root: Node | null): Node | null {
    if (root === null) {
        return null;
    }

    const queue: Node[] = [root];
    let size = 1;
    let isLeaf = false;

    while (size > 0) {
        let prev: Node | null = null;
        isLeaf = queue[0].left === null;
        for (let i = 0; i < size; i++) {
            if (prev !== null) {
                prev.next = queue[i];
            }
            prev = queue[i];
            if (!isLeaf) {
                queue.push(queue[i].left);
                queue.push(queue[i].right);
            }
        }
        queue.splice(0, size);
        size = queue.length;
    }

    return root;
};

export { connect, Node };
// https://bobbyhadz.com/blog/typescript-duplicate-identifier
