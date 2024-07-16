function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    if (prerequisites.length == 0) {
        return true;
    }

    const dependencies: number[][] = Array.from(Array(numCourses), () => []);

    for (let i = 0; i < prerequisites.length; i++) {
        if (prerequisites[i][0] > numCourses) {
            return false;
        }
        dependencies[prerequisites[i][0]].push(prerequisites[i][1]);
    }

    console.log("dependencies", dependencies);


    const chain: number[] = [];
    let dfs = function(current: number): boolean {
        console.log("search " + current)
        if (dependencies[current].length == 0) {
            return true;
        }
        console.log("has dependencies" + dependencies[current].length)

        if (chain.includes(current)) {
            console.log("chain contain")
            return false;
        }
        chain.push(current);

        for (let i = 0; i < dependencies[current].length; i++) {
            // should pop dependencies here?
            if (!dfs(dependencies[current][i])) {
                return false;
            }
        }

        chain.pop();
        dependencies[current].splice(0, dependencies[current].length);

        return true;
    }

    for (let i = 0; i < dependencies.length; i++) {
        if (!dfs(i)) {
            return false;
        }
    }

    return true;
};
