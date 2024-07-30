class LinkNode {
    val: number;
    next: LinkNode | null
    constructor(val: number) {
        this.val = val;
        this.next = null;
    }
}

const SIZE = 10000;

class MyHashSet {
    list: (LinkNode | null)[];
    // count: number;
    constructor() {
        this.list = new Array(SIZE).fill(0).map((): LinkNode | null => null)
        // this.count = 0;
    }

    add(key: number): void {
        const convert = this.hashFunc(key);
        let node = this.list[convert];
        if (node == null) {
            this.list[convert] = new LinkNode(key);
        } else {
            while (true) {
                if (node.val == key) {
                    break;
                }
                if (node.next == null) {
                    node.next = new LinkNode(key);
                    // this.count++;
                    // console.log("collide count", this.count);
                    // if (this.count % 100 == 0) {
                    //     console.log("empty: ", this.list.filter(node => node == null).length)
                    // }
                    break;
                }
                node = node.next;
            }
        }
    }

    remove(key: number): void {
        const convert = this.hashFunc(key);
        let node = this.list[convert];
        if (node == null) {
            return;
        }
        if (node.val == key) {
            this.list[convert] = node.next;
        } else {
            while (node.next != null) {
                if (node.next.val == key) {
                    node.next = node.next.next;
                    break;
                }
                node = node.next;
            }
        }
    }

    contains(key: number): boolean {
        const convert = this.hashFunc(key);
        let node = this.list[convert];
        if (node == null) {
            return false;
        }
        while (node != null) {
            if (node.val == key) {
                return true;
            }
            node = node.next;
        }
        return false;
    }

    hashFunc(key: number): number {
        let convert = key * (Math.sqrt(5) - 1) / 2;
        convert = Math.floor((convert - Math.floor(convert)) * SIZE);
        return convert;
    }
}
