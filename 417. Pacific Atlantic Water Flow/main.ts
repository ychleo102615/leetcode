function pacificAtlantic(heights: number[][]): number[][] {
    const HEIGHT = heights.length;
    const WIDTH = heights[0].length;

    enum ST {
        UNCHECKED,
        // TO_BE_CHECK,
        FLOWABLE,
    }

    const flowableTab: ST[][][] = [];
    for (let row = 0; row < HEIGHT; row++) {
        const flowableRow: ST[][] = [];
        for (let col = 0; col < WIDTH; col++) {
            flowableRow.push([ST.UNCHECKED, ST.UNCHECKED]);
        }
        flowableTab.push(flowableRow);
    }
    // console.log("flowableTab, initial: ", flowableTab);

    const bfsQueue: number[][] = [];
    function addQueue(row: number, col: number, sea: number) {
        if (flowableTab[row][col][sea] == ST.UNCHECKED) {
            flowableTab[row][col][sea] = ST.FLOWABLE;
            bfsQueue.push([row, col]);
        }
    }
    function deque(sea: number) {
        while(bfsQueue.length > 0) {
            const [row, col] = bfsQueue.splice(0, 1)[0]; // pop on head
            // up
            if (row > 0 && heights[row-1][col] >= heights[row][col]) {
                addQueue(row-1, col, sea);
            }
            // left
            if (col > 0 && heights[row][col-1] >= heights[row][col]) {
                addQueue(row, col-1, sea);
            }
            // down
            if (row < HEIGHT - 1 && heights[row+1][col] >= heights[row][col]) {
                addQueue(row+1, col, sea);
            }
            // right
            if (col < WIDTH - 1 && heights[row][col+1] >= heights[row][col]) {
                addQueue(row, col+1, sea);
            }
        }
    }

    // checking pacific
    let sea = 0;
    // add edge
    addQueue(0, 0, sea);
    for (let i = 1; i < HEIGHT; i++) {
        addQueue(i, 0, sea);
    }
    for (let i = 1; i < WIDTH; i++) {
        addQueue(0, i, sea);
    }
    deque(sea)
    // console.log("flowableTab, after checking Pacific: ", flowableTab)

    // checking atlantic
    sea = 1;
    // add edge
    addQueue(HEIGHT-1, WIDTH-1, sea);
    for (let i = HEIGHT-2; i >= 0; i--) {
        addQueue(i, WIDTH-1, sea);
    }
    for (let i = WIDTH-2; i >= 0; i--) {
        addQueue(HEIGHT-1, i, sea);
    }
    deque(sea)
    // console.log("flowableTab, after checking Atlantic: ", flowableTab)


    const bothCanGo: number[][] = [];
    for (let row = 0; row < HEIGHT; row++) {
        for (let col = 0; col < WIDTH; col++) {
            if (flowableTab[row][col].every(status => status == ST.FLOWABLE)) {
                bothCanGo.push([row, col]);
            }
        }
    }
    return bothCanGo;
};
