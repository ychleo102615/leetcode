
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

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


function sortedListToBST(head: ListNode | null): TreeNode | null {

    function build(root: ListNode | null): TreeNode | null {
        if (root === null) {
            return null;
        }
        let slow: ListNode | null = root;
        let fast: ListNode | null = root;
        let slowParent: ListNode | null;

        while (fast && fast.next) {
            slowParent = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        // has reached end
        if (slowParent !== undefined) {
            slowParent.next = null;
        } else {
            root = null;
        }

        return new TreeNode(slow.val, build(root), build(slow.next));
    }

    return build(head);
};
