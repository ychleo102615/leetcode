/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let head: ListNode | null = null;
    let cur: ListNode | null = null;
    let candidate: ListNode | null = null;


    while (list1 != null && list2 != null) {
        if (list1.val < list2.val) {
            candidate = list1;
            list1 = list1.next;
        } else {
            candidate = list2;
            list2 = list2.next;
        }

        if (head === null) {
            head = candidate;
            cur = head;
        } else {
            cur!.next = candidate;
            cur = candidate;
        }
    }

    candidate = (list1 == null) ? list2 : list1;

    if (head == null) {
        head = candidate;
    } else {
        cur!.next = candidate;
    }

    return head;
};
