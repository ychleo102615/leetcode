function updateBoard(board: string[][], click: number[]): string[][] {
    if (board[click[0]][click[1]] == "M") {
        board[click[0]][click[1]] = "X";
        return board;
    }
    board[click[0]][click[1]] = "B";
    const height = board.length;
    const width = board[0].length;
    const bfsQueue = [click];
    const countMap = new Map<number, number>();
    const mined = new Set<number>()
    const Zero = '0'.charCodeAt(0);
    const surrounding = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1],
    ];

    function surround(pos: number[]): number[][] {
        return surrounding.map(offset => [offset[0] + pos[0], offset[1] + pos[1]]).filter(surPos => {
            return surPos[0] >= 0 && surPos[0] < height && surPos[1] >= 0 && surPos[1] < width;
        })
    }
    function getKey(pos: number[]): number {
        return pos[0] * width + pos[1]
    }

    function addCountAno(pos: number[]) {
        const key = getKey(pos);
        if (countMap.has(key)) {
            countMap.set(key, countMap.get(key)! + 1);
        } else {
            countMap.set(key, 1);
        }
    }

    function searchAt(pos: number[]) {
        // console.log("Search: ", pos[0], pos[1], board[pos[0]][pos[1]])
        // console.log("count map", countMap)
        if (board[pos[0]][pos[1]] != "B") {
            return;
        }
        const candidate: number[][] = [];
        let hasMine = false;

        surround(pos).forEach(surPos => {
            const char = board[surPos[0]][surPos[1]];

            if (char == "E") {
                candidate.push(surPos);
                // bfsQueue.push(surPos);
                // board[surPos[0]][surPos[1]] = "B";
                // console.log("change", surPos)

            } else if (char == "B") {
                // do nothing
            } else if (char == "M") {
                // console.log("[[[ found mine ]]]")
                hasMine = true;
                if (mined.has(getKey(surPos)))
                    return
                surround(surPos).forEach(msPos => {
                    // addCount(msPos[0], msPos[1]);
                    addCountAno(msPos);
                })
                mined.add(getKey(surPos))
            } else {
                const value = char.charCodeAt(0) - Zero;
                if (value >= 1 && value <= 8) {
                    // do nothing

                } else {
                    // console.log("error when search surround: ", char)
                }
            }
        });

        if (!hasMine) {
            candidate.forEach(cpos => {
                bfsQueue.push(cpos);
                board[cpos[0]][cpos[1]] = "B";
            })
        }
    }

    while (bfsQueue.length > 0) {
        searchAt(bfsQueue.splice(0, 1)[0]);
    }

    countMap.forEach((count, key) => {
        const row = Math.floor(key / width);
        const col = key % width;
        // if (board[pos[0]][pos[1]] == "B") {
        //     board[pos[0]][pos[1]] = count.toString();
        // }
        if (board[row][col] == "B") {
            board[row][col] = count.toString();
        }
    })

    return board;
};
