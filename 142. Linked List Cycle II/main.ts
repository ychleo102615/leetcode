class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function detectCycle(head: ListNode | null): ListNode | null {
    let fast = head;
    let slow = head;
    // while (slow != null && fast != null) {
    //     slow = slow.next;
    //     fast = fast.next;
    //     if (fast == null) {
    //         return null;
    //     }
    //     fast = fast.next;
    //
    //     if (slow == fast) {
    //         break;
    //     }
    // }
    // if (fast == null || slow == null) {
    //     return null;
    // }
    // while (head != slow) {
    //     head = head!.next;
    //     slow = slow!.next;
    // }
    // return head;

    do {
        if (fast == null || fast.next == null) {
            return null;
        }
        slow = slow.next;
        fast = fast.next.next
    } while (slow != fast);
    while (head != slow) {
        head = head!.next;
        slow = slow!.next;
    }
    return head;

};
