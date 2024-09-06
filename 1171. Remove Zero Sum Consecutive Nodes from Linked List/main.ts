class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function removeZeroSumSublists(head: ListNode | null): ListNode | null {
    const rootParent = new ListNode(-1234567888, head);

    const nodeParentTrack: ListNode[] = [];
    const sumMap = new Map<number, number>();
    let curSum = 0;
    let parent = rootParent;

    function deleteNodes(parentOfStart: ListNode, amount: number) {
        console.log("delete node amount: ", amount)
        console.log("delete from ", parentOfStart.val)
        let cur: ListNode | null = parentOfStart;
        for (let i = 0; i < amount; i++) {
            cur = cur!.next;
            // cur = cur.next!;
        }
        parentOfStart.next = cur!.next;
    }


    while (parent.next != null) {

        const curNode = parent.next;
        curSum += curNode.val;
        console.log("----------")
        console.log("curVal", curNode.val)
        console.log("sum: " + curSum);

        nodeParentTrack.push(parent);

        if (curSum == 0) {


            for (let i = nodeParentTrack.length - 1; i >= 0; i--) {
                curSum -= nodeParentTrack[i].next!.val;
                if (i == 0) {
                    continue;
                }
                sumMap.delete(curSum);
                console.log("delete " + curSum)
                console.log("sub by " + nodeParentTrack[i].next!.val)
            }

            deleteNodes(rootParent, nodeParentTrack.length);
            console.log(nodeParentTrack[0], rootParent)

            nodeParentTrack.splice(0);
            console.log("after deletion sum: " + curSum);


        } else if (sumMap.has(curSum)) {
            console.log("repeated sum: " + curSum);
            const startIndex = sumMap.get(curSum)! + 1;
            const startNode = nodeParentTrack[startIndex];
            const deleteds = nodeParentTrack.splice(startIndex);

            for (let i = deleteds.length - 1; i >= 0; i--) {
                curSum -= deleteds[i].next!.val;
                if (i == 0) {
                    continue;
                }
                sumMap.delete(curSum);
            }
            console.log("after deletion sum: " + curSum);

            deleteNodes(startNode, deleteds.length);

        } else {
            sumMap.set(curSum, nodeParentTrack.length - 1);
            // track.push(cur);
        }

        /*
            * parent可能是已經被刪除的node，在只刪除一個node的情況，parent.next會被修改，也就是說parent不用遞迴（他的next已經指在下一個node上了）
            * 其餘情況仍須正常遞迴
            *
            * */


        if (nodeParentTrack.length > 0) {
            parent = nodeParentTrack[nodeParentTrack.length - 1].next;
        } else {
            parent = rootParent;
        }
        console.log("cur parent", parent.val)
        // if (parent.next == curNode) {
        //     parent = parent.next;
        // }
        // parent = parent.next;
        // parent = curNode;
        // parent = parent.next;
        console.log("cur track length", nodeParentTrack.length)
        console.log("track", nodeParentTrack.map(node => node.val))
        // console.log("sum map", sumMap);
        console.log("whole", rootParent)

        if (parent == null) {
            break;
        }
        console.log("next parent", parent.val)
    }

    return rootParent.next;
};
