class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

/**
 * 最後發現oddTail可以不需要
 *
 */
function oddEvenList(head: ListNode | null): ListNode | null {
    if (head == null) {
        return null;
    }

    let cur = head;
    // let oddTail = cur;
    // let oddTail: ListNode | null = null;
    let evenHead: ListNode | null = null;
    let evenTail: ListNode | null = null;


    while (cur.next != null) {
        if (evenHead == null) {
            evenHead = cur.next;
        }
        if (evenTail != null) {
            evenTail.next = cur.next;
        }
        evenTail = cur.next;

        if (cur.next.next == null) {
            // oddTail = cur;
            break;
        }

        // const nextIter = cur.next.next;
        // oddTail.next = nextIter;
        // oddTail = nextIter;
        // cur = nextIter;
        cur.next = cur.next.next;
        cur = cur.next;
    }


    // if (oddTail != null) {
    //     oddTail.next = evenHead;
    // }
    cur.next = evenHead;

    if (evenTail != null) {
        evenTail.next = null;
    }

    return head;
};









// function oddEvenList(head: ListNode | null): ListNode | null {
//     let oddTail: ListNode | null = null;
//     let evenHead: ListNode | null = null;
//     let evenTail: ListNode | null = null;
//     let cur = head;
//
//     while (cur != null) {
//         if (cur.next == null) {
//             oddTail = cur;
//             break;
//         }
//
//         const nextIter = cur.next.next;
//         const curEven = cur.next;
//
//
//         if (oddTail == null) {
//             oddTail = cur;
//         }
//         oddTail.next = nextIter;
//         oddTail = nextIter;
//
//         if (evenTail == null) {
//             evenHead = curEven;
//             evenTail = curEven;
//         }
//         evenTail.next = curEven;
//         evenTail = curEven;
//
//         cur = nextIter;
//     }
//
//     if (evenHead != null && oddTail != null) {
//         oddTail.next = evenHead;
//     }
//     if (evenTail != null) {
//         evenTail.next = null;
//     }
//
//
//     return head;
// };
