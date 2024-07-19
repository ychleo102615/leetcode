class PNode {
    public isEnd: boolean;
    public children: Map<string, PNode>;
    constructor() {
        this.isEnd = false;
        this.children = new Map<string, PNode>();
    }
}

class Trie {
    private root: PNode;
    constructor() {
        this.root = new PNode();
    }

    insert(word: string): void {
        if (word.length == 0) {
            return;
        }
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            let nextNode = node.children.get(word[i]);
            if (nextNode == undefined) {
                nextNode = new PNode();
                node.children.set(word[i], nextNode);
            }
            node = nextNode;
        }
        if (!node.isEnd) {
            node.isEnd = true;
        }
    }

    search(word: string): boolean {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            let nextNode = node.children.get(word[i]);
            if (nextNode == undefined) {
                return false;
            }
            node = nextNode;
        }
        return node.isEnd;
    }

    startsWith(prefix: string): boolean {
        let node = this.root;
        for (let i = 0; i < prefix.length; i++) {
            let nextNode = node.children.get(prefix[i]);
            if (nextNode == undefined) {
                return false;
            }
            node = nextNode;
        }
        return true;
    }
}

class TriePrev {
    private prefices: Map<string, boolean>
    constructor() {
        this.prefices = new Map<string, boolean>();
    }

    insert(word: string): void {
        for (let i = 1; i < word.length; i++) {
            if (!this.prefices.has(word.substring(0, i))) {
                this.prefices.set(word.substring(0, i), false);
            }
        }
        this.prefices.set(word, true);
    }

    search(word: string): boolean {
        if (this.prefices.has(word)) {
            return this.prefices.get(word)!;
        } else {
            return false;
        }
    }

    startsWith(prefix: string): boolean {
        return this.prefices.has(prefix);
    }
}
