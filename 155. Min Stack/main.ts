class MinStack {
    stack: number[];
    changingPoints: number[];

    constructor() {
        this.stack = [];
        this.changingPoints = [];
    }

    push(val: number): void {
        this.stack.push(val);

        if (this.changingPoints.length > 0) {
            let curPoint = this.changingPoints[this.changingPoints.length-1];
            if (this.stack[curPoint] > val) {
                this.changingPoints.push(this.stack.length-1);
            }
        } else {
            this.changingPoints.push(0);
        }
    }

    pop(): void {
        this.stack.pop();
        if (this.changingPoints[this.changingPoints.length-1] >= this.stack.length) {
            this.changingPoints.pop();
        }
    }

    top(): number {
        return this.stack[this.stack.length-1];
    }

    getMin(): number {
        return this.stack[this.changingPoints[this.changingPoints.length-1]];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
