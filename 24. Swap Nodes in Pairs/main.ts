 class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }


function swapPairs(head: ListNode | null): ListNode | null {
    if (head == null) {
        return null;
    }
    if (head.next == null) {
        return head;
    }

    let parent = new ListNode(0, head);
    head = head.next;
    let temp: ListNode | null;

    while (parent.next) {
        // console.log("hello parent", parent.val)
        temp = parent.next;
        if (temp.next == null) {
            // console.log("bye")

            break;
        }
        parent.next = temp.next;
        temp.next = parent.next.next;
        parent.next.next = temp;

        parent = temp;
    }

    return head;
};
