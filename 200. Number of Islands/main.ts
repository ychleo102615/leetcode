function numIslands(grid: string[][]): number {
    const height = grid.length;
    const width = grid[0].length;
    const totalLength = height * width;

    const visited = new Array(totalLength).fill(false);
    let count = 0;

    let exporeIsland = function(row: number, col: number) {
        // const queue: number[] = [];
        // const queue = [row*width+col];
        const queue = [[row, col]];

        while (queue.length > 0) {
            const tuple = queue.pop()!;
            visited[tuple[0]*width+tuple[1]] = true;
            if (grid[tuple[0]][tuple[1]] == "0") {
                continue;
            }
            if (tuple[0] + 1 < height && !visited[(tuple[0]+1)*width+tuple[1]]) {
                queue.push([tuple[0]+1, tuple[1]]);
            }
            if (tuple[1] + 1 < width && !visited[tuple[0]*width+tuple[1]+1]) {
                queue.push([tuple[0], tuple[1]+1]);
            }
            if (tuple[0] > 0 && !visited[(tuple[0]-1)*width+tuple[1]]) {
                queue.push([tuple[0]-1, tuple[1]]);
            }
            if (tuple[1] > 0 && !visited[tuple[0]*width+tuple[1]-1]) {
                queue.push([tuple[0], tuple[1]-1]);
            }
        }
    }

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (visited[i*width+j])
                continue;
            if (grid[i][j] == "0") {
                visited[i*width+j] = true;
                continue;
            } else {
                exporeIsland(i, j);
                count++;
                console.log("after explore",i, j, visited)
            }
        }
    }

    return count;
};
