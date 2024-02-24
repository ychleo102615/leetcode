function numDistinct(s: string, t: string): number {
    const myMap: Map<string, number>[] = Array.from(new Array(s.length), () => new Map<string, number>());
    // const myMap: Map<string, number>[] = new Array(s.length).fill(new Map<string, number>());
    // const anoMap: Map<string, Map<string, number>> = new Map<string, Map<string, number>>();

    function findSubString(sIndex: number, subT: string): number {
        // let pattern = "[" + s.slice(sIndex) + "," + subT +  "]";
        // console.log("Find " + pattern)
        // console.log(indent + "Find " + pattern)
        if (subT.length === 0 ) {
            // console.log(indent + "t is empty, return 1\n")
            return 1;
        }
        if (sIndex === s.length) {
            // console.log(indent + "reached, return 0\n")
            return 0;
        }
        let result = myMap[sIndex].get(subT);
        // let thisMap = anoMap.get(s.slice(sIndex));
        // if (thisMap === undefined) {
        //     thisMap = new Map<string, number>();
        //     anoMap.set(s.slice(sIndex), thisMap);
        // }
        // let result = anoMap.get(s.slice(sIndex))?.get(subT);

        if (result !== undefined) {
            // console.log(indent + "This pattern has searched before: " + result + "\n");
            // console.log("This pattern has searched before: " + result + " " + pattern);
            return result;
        }


        result = 0;
        // let amountWhenTake = 0;
        if (s[sIndex] === subT[0]) {
            result += findSubString(sIndex + 1, subT.slice(1))
            // amountWhenTake = findSubString(sIndex + 1, subT.slice(1))
            // console.log("take [" + subT[0] + "] from s, get " + amountWhenTake)
            // console.log(indent + "take [" + subT[0] + "] from s, get " + amount)
            // result += amountWhenTake;
        }
        result += findSubString(sIndex + 1, subT)
        // let amountNotTake = findSubString(sIndex + 1, subT)
        // console.log("without " + subT[0] + " get " + amountNotTake)
        // console.log(indent + "without " + subT[0] + " get " + amount)
        // result += amountNotTake;



        // result = findSubString(sIndex + 1, subT) + findSubString(sIndex + 1, subT.slice(1));

        myMap[sIndex].set(subT, result);
        // myMap[sIndex].set(subT, amountWhenTake + amountNotTake);
        // thisMap.set(subT, amountNotTake + amountWhenTake)
        // myMap[sIndex].set(subT, result);
        // console.log("result set: " + thisMap.get(subT) + " with " + pattern )
        // console.log("result set: " + myMap[sIndex].get(subT) + " with " + pattern )
        // console.log("take: " + amountWhenTake + ", without: " + amountNotTake);

        return result;
    }
    return findSubString(0, t);
};
